import { INTENTS } from '../data/mockData';
import { Intent } from '../types';

/**
 * Constantes de configuração e pesos do sistema de decisão
 */
const SCORING_CONFIG = {
  WEIGHT_COMPOUND_MATCH: 3,     // Expressão exata composta (ex: "casa nova")
  WEIGHT_EXACT_MATCH: 2,        // Palavra individual idêntica (ex: "vacina")
  WEIGHT_FUZZY_MATCH: 1,        // Tolerância a erro de digitação (Levenshtein == 1)
  MIN_WORD_LENGTH_FOR_FUZZY: 4, // Palavras curtas (ex: "pai", "dia") não devem usar fuzzy para evitar falsos positivos
  MAX_LEVENSHTEIN_DISTANCE: 1,  // Máximo de edições permitidas para aceitar erro de digitação
  MIN_SCORE_THRESHOLD: 0,       // Pontuação mínima para aceitar uma intenção
} as const;

/**
 * Normaliza um texto para comparação:
 * 1. Converte para minúsculas
 * 2. Remove acentos e diacríticos (ex: "vacinação" -> "vacinacao")
 * 3. Remove pontuações e caracteres especiais
 * 4. Normaliza espaços múltiplos
 */
export function normalizeText(text: string): string {
  if (!text) return '';

  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\p{L}\p{N}\s]/gu, ' ') // Substitui pontuação por espaço
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Divide o texto normalizado em tokens (palavras individuais)
 */
export function tokenize(text: string): string[] {
  const normalized = normalizeText(text);
  return normalized ? normalized.split(' ').filter(Boolean) : [];
}

/**
 * Calcula a distância de Levenshtein entre duas palavras com otimização de memória O(min(N, M)).
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  // Garante que 'b' seja a menor string para gastar menos memória
  let str1 = a;
  let str2 = b;
  if (str1.length < str2.length) {
    str1 = b;
    str2 = a;
  }

  let prevRow = Array.from({ length: str2.length + 1 }, (_, i) => i);
  let currRow = new Array<number>(str2.length + 1);

  for (let i = 1; i <= str1.length; i++) {
    currRow[0] = i;
    const char1 = str1.charCodeAt(i - 1);

    for (let j = 1; j <= str2.length; j++) {
      const char2 = str2.charCodeAt(j - 1);
      const cost = char1 === char2 ? 0 : 1;

      currRow[j] = Math.min(
        prevRow[j] + 1,        // Deleção
        currRow[j - 1] + 1,    // Inserção
        prevRow[j - 1] + cost  // Substituição
      );
    }

    [prevRow, currRow] = [currRow, prevRow];
  }

  return prevRow[str2.length];
}

/**
 * Avalia se há correspondência aproximada (fuzzy match) de uma palavra-chave com algum token do usuário.
 */
function hasFuzzyMatch(keyword: string, inputWords: string[]): boolean {
  if (keyword.length < SCORING_CONFIG.MIN_WORD_LENGTH_FOR_FUZZY) {
    return false;
  }

  for (const word of inputWords) {
    // Filtro de tamanho para evitar cálculo desnecessário de distância
    if (Math.abs(word.length - keyword.length) <= SCORING_CONFIG.MAX_LEVENSHTEIN_DISTANCE) {
      if (levenshteinDistance(word, keyword) <= SCORING_CONFIG.MAX_LEVENSHTEIN_DISTANCE) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Calcula a pontuação individual de uma palavra-chave para o input fornecido.
 */
function calculateKeywordScore(keyword: string, cleanInput: string, inputWords: string[]): number {
  const normalizedKeyword = normalizeText(keyword);
  if (!normalizedKeyword) return 0;

  // 1. Termo composto (ex: "casa nova", "pre natal")
  if (normalizedKeyword.includes(' ')) {
    return cleanInput.includes(normalizedKeyword) ? SCORING_CONFIG.WEIGHT_COMPOUND_MATCH : 0;
  }

  // 2. Correspondência exata da palavra no array de tokens
  if (inputWords.includes(normalizedKeyword)) {
    return SCORING_CONFIG.WEIGHT_EXACT_MATCH;
  }

  // 3. Correspondência aproximada com tolerância a erro de digitação
  if (hasFuzzyMatch(normalizedKeyword, inputWords)) {
    return SCORING_CONFIG.WEIGHT_FUZZY_MATCH;
  }

  return 0;
}

/**
 * Calcula a pontuação total de uma intenção somando a contribuição de todas as suas palavras-chave.
 */
function calculateIntentScore(intent: Intent, cleanInput: string, inputWords: string[]): number {
  return intent.keywords.reduce((score, keyword) => {
    return score + calculateKeywordScore(keyword, cleanInput, inputWords);
  }, 0);
}

/**
 * Resolve a melhor intenção com base no input do usuário, utilizando:
 * - Normalização com remoção de acentos e pontuações
 * - Busca de termos compostos e palavras exatas
 * - Tolerância a erros de digitação via algoritmo de Levenshtein
 * - Ranqueamento por relevância acumulada (Score System)
 */
export const resolveIntent = (input: string): Intent | null => {
  const cleanInput = normalizeText(input);
  if (!cleanInput) return null;

  const inputWords = tokenize(cleanInput);
  if (inputWords.length === 0) return null;

  let bestIntent: Intent | null = null;
  let highestScore: number = SCORING_CONFIG.MIN_SCORE_THRESHOLD;

  for (const intent of INTENTS) {
    const currentScore = calculateIntentScore(intent, cleanInput, inputWords);

    if (currentScore > highestScore) {
      highestScore = currentScore;
      bestIntent = intent;
    }
  }

  return bestIntent;
};
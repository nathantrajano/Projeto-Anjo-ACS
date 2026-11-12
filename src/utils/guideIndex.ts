import { GUIDES, INTENTS } from '../data/mockData';
import {
  Guide,
  GuideIndexEntry,
  GuideSearchMatchField,
  GuideSearchResult,
  Intent,
} from '../types';

const FIELD_WEIGHTS: Record<GuideSearchMatchField, number> = {
  title: 4.0,
  tags: 3.5,
  category: 2.0,
  summary: 2.0,
  steps: 1.2,
};

const SEARCH_CONFIG = {
  MIN_WORD_LENGTH_FOR_FUZZY: 4,
  MAX_LEVENSHTEIN_DISTANCE: 1,
  PHRASE_BONUS_TITLE: 8,
  PHRASE_BONUS_TAG: 6,
  PHRASE_BONUS_SUMMARY: 3,
  PHRASE_BONUS_STEPS: 2,
  COVERAGE_BONUS_WEIGHT: 4,
  FUZZY_MULTIPLIER: 0.7,
} as const;

const PT_STOPWORDS = new Set([
  'a', 'as', 'o', 'os', 'um', 'uma', 'uns', 'umas',
  'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
  'por', 'para', 'pra', 'com', 'e', 'ou', 'que', 'qual', 'quais',
  'como', 'onde', 'quando', 'porque', 'eu', 'voce', 'vc',
  'meu', 'minha', 'meus', 'minhas', 'seu', 'sua', 'seus', 'suas',
  'esse', 'essa', 'isso', 'este', 'esta', 'isto',
  'faco', 'fazer', 'quero', 'saber', 'posso', 'preciso', 'ter', 'estou',
]);

/**
 * Normaliza um texto para comparação (minúsculas, sem acentos nem pontuação).
 */
export function normalizeText(text: string): string {
  if (!text) return '';

  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Divide o texto normalizado em tokens individuais.
 */
export function tokenize(text: string): string[] {
  const normalized = normalizeText(text);
  return normalized ? normalized.split(' ').filter(Boolean) : [];
}

function tokenizeFiltered(text: string): string[] {
  const tokens = tokenize(text);
  const filtered = tokens.filter((t) => !PT_STOPWORDS.has(t));
  return filtered.length > 0 ? filtered : tokens;
}

/**
 * Distância de Levenshtein com otimização de memória O(min(N, M)).
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

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
        prevRow[j] + 1,
        currRow[j - 1] + 1,
        prevRow[j - 1] + cost
      );
    }

    [prevRow, currRow] = [currRow, prevRow];
  }

  return prevRow[str2.length];
}

export interface BuiltGuideIndex {
  entries: GuideIndexEntry[];
  entriesById: Map<string, GuideIndexEntry>;
  invertedIndex: Map<string, Map<string, Set<GuideSearchMatchField>>>;
  allIndexedTokens: string[];
}

function buildLinkedIntent(guide: Guide, existingIntent?: Intent): Intent {
  if (existingIntent) return existingIntent;

  return {
    id: `auto-${guide.id}`,
    title: guide.title,
    keywords: guide.tags ?? [],
    guideId: guide.id,
    confirmationPhrase:
      guide.confirmationPhrase ??
      `Entendi. Você quer saber sobre ${guide.title}. Posso continuar para o guia?`,
  };
}

/**
 * Constrói o índice de busca dos guias e seu índice invertido de termos.
 */
export function buildGuideIndex(guides: Guide[], intents: Intent[]): BuiltGuideIndex {
  const intentsByGuideId = new Map<string, Intent>();
  for (const intent of intents) {
    if (!intentsByGuideId.has(intent.guideId)) {
      intentsByGuideId.set(intent.guideId, intent);
    }
  }

  const entries: GuideIndexEntry[] = [];
  const entriesById = new Map<string, GuideIndexEntry>();
  const invertedIndex = new Map<string, Map<string, Set<GuideSearchMatchField>>>();

  const registerToken = (
    token: string,
    guideId: string,
    field: GuideSearchMatchField
  ) => {
    let guideMap = invertedIndex.get(token);
    if (!guideMap) {
      guideMap = new Map<string, Set<GuideSearchMatchField>>();
      invertedIndex.set(token, guideMap);
    }
    let fieldSet = guideMap.get(guideId);
    if (!fieldSet) {
      fieldSet = new Set<GuideSearchMatchField>();
      guideMap.set(guideId, fieldSet);
    }
    fieldSet.add(field);
  };

  for (const guide of guides) {
    const linkedIntent = buildLinkedIntent(guide, intentsByGuideId.get(guide.id));

    const titleNormalized = normalizeText(guide.title);
    const categoryNormalized = normalizeText(guide.category);
    const summaryNormalized = normalizeText(guide.summary);
    const stepsRaw = guide.steps
      .map((s) => `${s.title} ${s.description} ${s.visualTip ?? ''}`)
      .join(' ');
    const stepsNormalized = normalizeText(stepsRaw);

    const rawTags = [...(guide.tags ?? []), ...linkedIntent.keywords];
    const compoundTags: string[] = [];
    const tagTokens = new Set<string>();

    for (const rawTag of rawTags) {
      const normalizedTag = normalizeText(rawTag);
      if (!normalizedTag) continue;
      if (normalizedTag.includes(' ')) {
        compoundTags.push(normalizedTag);
      }
      for (const token of tokenizeFiltered(normalizedTag)) {
        tagTokens.add(token);
      }
    }

    const tokensByField: Record<GuideSearchMatchField, Set<string>> = {
      title: new Set(tokenizeFiltered(guide.title)),
      tags: tagTokens,
      category: new Set(tokenizeFiltered(guide.category)),
      summary: new Set(tokenizeFiltered(guide.summary)),
      steps: new Set(tokenizeFiltered(stepsRaw)),
    };

    const allTokensSet = new Set<string>();
    (Object.keys(tokensByField) as GuideSearchMatchField[]).forEach((field) => {
      for (const token of tokensByField[field]) {
        allTokensSet.add(token);
        registerToken(token, guide.id, field);
      }
    });

    const entry: GuideIndexEntry = {
      guideId: guide.id,
      guide,
      intent: linkedIntent,
      titleNormalized,
      categoryNormalized,
      summaryNormalized,
      stepsNormalized,
      compoundTags: Array.from(new Set(compoundTags)),
      tokensByField,
      allTokens: Array.from(allTokensSet),
    };

    entries.push(entry);
    entriesById.set(guide.id, entry);
  }

  return {
    entries,
    entriesById,
    invertedIndex,
    allIndexedTokens: Array.from(invertedIndex.keys()),
  };
}

export const GUIDE_INDEX: BuiltGuideIndex = buildGuideIndex(GUIDES, INTENTS);

interface Accumulator {
  score: number;
  fields: Set<GuideSearchMatchField>;
  matchedQueryTokens: Set<string>;
  matchedTerms: Set<string>;
}

const getOrCreateAcc = (
  map: Map<string, Accumulator>,
  guideId: string
): Accumulator => {
  let acc = map.get(guideId);
  if (!acc) {
    acc = {
      score: 0,
      fields: new Set<GuideSearchMatchField>(),
      matchedQueryTokens: new Set<string>(),
      matchedTerms: new Set<string>(),
    };
    map.set(guideId, acc);
  }
  return acc;
};

const addFieldHits = (
  acc: Accumulator,
  fields: Set<GuideSearchMatchField>,
  multiplier = 1
): number => {
  let maxWeight = 0;
  for (const field of fields) {
    acc.fields.add(field);
    if (FIELD_WEIGHTS[field] > maxWeight) {
      maxWeight = FIELD_WEIGHTS[field];
    }
  }
  const multiFieldBonus = fields.size > 1 ? 0.5 : 0;
  return (maxWeight + multiFieldBonus) * multiplier;
};

/**
 * Pesquisa guias usando o índice pré-processado e ranqueamento ponderado por campo.
 */
export function searchGuideIndex(
  query: string,
  limit = 10,
  index: BuiltGuideIndex = GUIDE_INDEX
): GuideSearchResult[] {
  const cleanQuery = normalizeText(query);
  if (!cleanQuery) return [];

  const queryTokens = tokenizeFiltered(cleanQuery);
  if (queryTokens.length === 0) return [];

  const uniqueQueryTokens = Array.from(new Set(queryTokens));
  const cleanFilteredPhrase = uniqueQueryTokens.join(' ');
  const accumulators = new Map<string, Accumulator>();

  // 1. Correspondência exata via índice invertido + fallback fuzzy
  for (const qToken of uniqueQueryTokens) {
    const exactGuideMap = index.invertedIndex.get(qToken);

    if (exactGuideMap) {
      for (const [guideId, fields] of exactGuideMap.entries()) {
        const acc = getOrCreateAcc(accumulators, guideId);
        acc.score += addFieldHits(acc, fields, 1);
        acc.matchedQueryTokens.add(qToken);
        acc.matchedTerms.add(qToken);
      }
    }

    if (qToken.length >= SEARCH_CONFIG.MIN_WORD_LENGTH_FOR_FUZZY) {
      for (const indexedToken of index.allIndexedTokens) {
        if (indexedToken === qToken) continue;
        if (
          Math.abs(indexedToken.length - qToken.length) >
          SEARCH_CONFIG.MAX_LEVENSHTEIN_DISTANCE
        ) {
          continue;
        }
        if (
          levenshteinDistance(qToken, indexedToken) <=
          SEARCH_CONFIG.MAX_LEVENSHTEIN_DISTANCE
        ) {
          const fuzzyGuideMap = index.invertedIndex.get(indexedToken);
          if (!fuzzyGuideMap) continue;

          for (const [guideId, fields] of fuzzyGuideMap.entries()) {
            const acc = getOrCreateAcc(accumulators, guideId);
            if (!acc.matchedQueryTokens.has(qToken)) {
              acc.score += addFieldHits(acc, fields, SEARCH_CONFIG.FUZZY_MULTIPLIER);
              acc.matchedQueryTokens.add(qToken);
              acc.matchedTerms.add(indexedToken);
            }
          }
        }
      }
    }
  }

  // 2. Bônus por frases compostas, título/resumo/passos e cobertura da query
  for (const entry of index.entries) {
    let acc = accumulators.get(entry.guideId);

    // Verifica frases compostas nas tags mesmo que tokens individuais não tenham batido antes
    let compoundHitCount = 0;
    for (const phrase of entry.compoundTags) {
      if (cleanQuery.includes(phrase)) {
        compoundHitCount += 1;
        acc = acc ?? getOrCreateAcc(accumulators, entry.guideId);
        acc.fields.add('tags');
        acc.matchedTerms.add(phrase);
      }
    }
    if (compoundHitCount > 0 && acc) {
      acc.score += compoundHitCount * SEARCH_CONFIG.PHRASE_BONUS_TAG;
    }

    if (!acc) continue;

    if (
      cleanQuery.length >= 4 &&
      (entry.titleNormalized.includes(cleanQuery) ||
        (uniqueQueryTokens.length >= 2 &&
          entry.titleNormalized.includes(cleanFilteredPhrase)))
    ) {
      acc.score += SEARCH_CONFIG.PHRASE_BONUS_TITLE;
      acc.fields.add('title');
    }

    if (cleanQuery.length >= 4 && entry.summaryNormalized.includes(cleanQuery)) {
      acc.score += SEARCH_CONFIG.PHRASE_BONUS_SUMMARY;
      acc.fields.add('summary');
    }

    if (cleanQuery.length >= 4 && entry.stepsNormalized.includes(cleanQuery)) {
      acc.score += SEARCH_CONFIG.PHRASE_BONUS_STEPS;
      acc.fields.add('steps');
    }

    if (uniqueQueryTokens.length >= 2) {
      const coverage = acc.matchedQueryTokens.size / uniqueQueryTokens.length;
      acc.score += coverage * SEARCH_CONFIG.COVERAGE_BONUS_WEIGHT;
    }
  }

  const results: GuideSearchResult[] = [];
  for (const [guideId, acc] of accumulators.entries()) {
    const entry = index.entriesById.get(guideId);
    if (!entry || acc.score <= 0) continue;

    results.push({
      guide: entry.guide,
      intent: entry.intent,
      score: Number(acc.score.toFixed(2)),
      matchedFields: Array.from(acc.fields),
      matchedTerms: Array.from(acc.matchedTerms),
    });
  }

  results.sort((a, b) => b.score - a.score);
  return limit > 0 ? results.slice(0, limit) : results;
}


import { GuideSearchResult, Intent } from '../types';
import {
  levenshteinDistance,
  normalizeText,
  searchGuideIndex,
  tokenize,
} from './guideIndex';

export { levenshteinDistance, normalizeText, tokenize };

export interface GuideResolution {
  best: GuideSearchResult | null;
  confident: boolean;
  results: GuideSearchResult[];
}

const CONFIDENCE_CONFIG = {
  MIN_SINGLE_SCORE: 2,
  MIN_TOP_SCORE: 3,
  MIN_SCORE_GAP: 1.5,
  MIN_SCORE_RATIO: 1.25,
} as const;

/**
 * Busca guias ranqueados a partir do índice de guias.
 */
export const searchGuides = (input: string, limit = 10): GuideSearchResult[] => {
  return searchGuideIndex(input, limit);
};

/**
 * Avalia se há um guia vencedor claro ou se o resultado é ambíguo.
 */
export const resolveBestGuide = (input: string, limit = 5): GuideResolution => {
  const results = searchGuideIndex(input, limit);
  if (results.length === 0) {
    return { best: null, confident: false, results: [] };
  }

  const best = results[0];
  if (results.length === 1) {
    return {
      best,
      confident: best.score >= CONFIDENCE_CONFIG.MIN_SINGLE_SCORE,
      results,
    };
  }

  const runnerUp = results[1];
  const scoreGap = best.score - runnerUp.score;
  const confident =
    best.score >= CONFIDENCE_CONFIG.MIN_TOP_SCORE &&
    (scoreGap >= CONFIDENCE_CONFIG.MIN_SCORE_GAP ||
      best.score >= runnerUp.score * CONFIDENCE_CONFIG.MIN_SCORE_RATIO);

  return { best, confident, results };
};

/**
 * Resolve a melhor intenção correspondente usando o índice de guias.
 */
export const resolveIntent = (input: string): Intent | null => {
  const { best } = resolveBestGuide(input, 1);
  return best ? best.intent : null;
};

/**
 * Determina a rota e o estado de navegação após uma busca por voz, texto ou OCR.
 */
export const getQueryNavigationTarget = (
  input: string
): { path: '/confirmacao' | '/selecionar-intencao'; state: Record<string, unknown> } => {
  const { best, confident, results } = resolveBestGuide(input, 5);

  if (best && confident) {
    return {
      path: '/confirmacao',
      state: { intent: best.intent },
    };
  }

  return {
    path: '/selecionar-intencao',
    state: {
      fallbackText: input,
      suggestedResults: results,
    },
  };
};

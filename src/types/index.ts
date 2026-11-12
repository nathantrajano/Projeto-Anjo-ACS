export interface Step {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  visualTip?: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  steps: Step[];
  relatedManuals?: string[];
  hasDetailedGuide?: boolean;
  tags?: string[];
  confirmationPhrase?: string;
}

export interface Manual {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  category: string;
}

export interface Intent {
  id: string;
  title: string;
  keywords: string[];
  guideId: string;
  confirmationPhrase?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  intents: string[];
}

export type GuideSearchMatchField = 'title' | 'tags' | 'category' | 'summary' | 'steps';

export interface GuideIndexEntry {
  guideId: string;
  guide: Guide;
  intent: Intent;
  titleNormalized: string;
  categoryNormalized: string;
  summaryNormalized: string;
  stepsNormalized: string;
  compoundTags: string[];
  tokensByField: Record<GuideSearchMatchField, Set<string>>;
  allTokens: string[];
}

export interface GuideSearchResult {
  guide: Guide;
  intent: Intent;
  score: number;
  matchedFields: GuideSearchMatchField[];
  matchedTerms: string[];
}

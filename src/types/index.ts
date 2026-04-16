export interface Step {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  steps: Step[];
  relatedManuals?: string[];
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
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  intents: string[];
}
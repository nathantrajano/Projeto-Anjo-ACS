import { INTENTS } from '../data/mockData';
import { Intent } from '../types';

export const resolveIntent = (input: string): Intent | null => {
  const normalizedInput = input.toLowerCase();
  
  for (const intent of INTENTS) {
    const match = intent.keywords.some(keyword => normalizedInput.includes(keyword));
    if (match) return intent;
  }
  
  return null;
};
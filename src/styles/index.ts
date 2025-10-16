import { foundationTokens } from './foundationTokens';
import { semanticTokens } from './semanticTokens';

export type { FoundationTokens } from './foundationTokens';
export type { SemanticTokens } from './semanticTokens';

// Convenience export for all tokens
export const tokens = {
  ...foundationTokens,
  ...semanticTokens,
} as const;

export type Tokens = typeof tokens;

import { foundationTokens } from './foundationTokens';

/**
 * Semantic Tokens
 * Tokens for components with semantic meaning
 */

export const semanticTokens = {
  // Button Component
  button: {
    base: {
      fontFamily: foundationTokens.fonts.base,
      fontWeight: foundationTokens.fontWeights.medium,
      borderRadius: foundationTokens.borderRadius.base,
      transition: foundationTokens.transitions.base,
      cursor: 'pointer',
      border: 'none',
    },

    // Variants
    primary: {
      backgroundColor: foundationTokens.colors.blue[500],
      color: foundationTokens.colors.white,
      hover: {
        backgroundColor: foundationTokens.colors.blue[600],
      },
      active: {
        backgroundColor: foundationTokens.colors.blue[700],
      },
    },

    secondary: {
      backgroundColor: foundationTokens.colors.gray[500],
      color: foundationTokens.colors.white,
      hover: {
        backgroundColor: foundationTokens.colors.gray[600],
      },
      active: {
        backgroundColor: foundationTokens.colors.gray[700],
      },
    },

    outline: {
      backgroundColor: 'transparent',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: foundationTokens.colors.blue[500],
      color: foundationTokens.colors.blue[500],
      hover: {
        backgroundColor: foundationTokens.colors.blue[500],
        color: foundationTokens.colors.white,
      },
    },

    // Sizes
    size: {
      sm: {
        padding: `${foundationTokens.spacing[1]} ${foundationTokens.spacing[3]}`,
        fontSize: foundationTokens.fontSizes.sm,
      },
      md: {
        padding: `${foundationTokens.spacing[2]} ${foundationTokens.spacing[4]}`,
        fontSize: foundationTokens.fontSizes.base,
      },
      lg: {
        padding: `${foundationTokens.spacing[3]} ${foundationTokens.spacing[6]}`,
        fontSize: foundationTokens.fontSizes.lg,
      },
    },

    // States
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  // Placeholder for future components
  // input: { ... },
  // card: { ... },
  // badge: { ... },
} as const;

export type SemanticTokens = typeof semanticTokens;

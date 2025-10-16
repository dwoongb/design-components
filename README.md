# Design Components

A React component library built with TypeScript, Emotion, and Storybook. This library provides a collection of reusable UI components with a comprehensive design system.

## 🚀 Features

- ✅ **TypeScript** - Full type safety
- ✅ **Emotion** - CSS-in-JS with `css` prop
- ✅ **Storybook** - Interactive component documentation
- ✅ **Design Tokens** - Foundation and Semantic token system
- ✅ **Responsive** - Mobile-first responsive design
- ✅ **Accessible** - Built with accessibility in mind
- ✅ **Tree-shakeable** - Optimized bundle size

## 📦 Installation

```bash
npm install design-components
# or
pnpm add design-components
# or
yarn add design-components
```

## 🎨 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'design-components';

function App() {
  return (
    <>
      <Button variant="primary" size="md">
        Primary Button
      </Button>
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
      <Button variant="outline" size="sm">
        Outline Button
      </Button>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Button variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable the button |
| `children` | `ReactNode` | - | Button content |

All standard HTML button attributes are also supported.

## 🎨 Design System

### Design Tokens

This library uses a two-tier token system:

#### Foundation Tokens
Primitive design values (colors, spacing, typography, etc.)

```tsx
import { foundationTokens } from 'design-components/styles';

const MyComponent = () => (
  <div style={{ color: foundationTokens.colors.blue[500] }}>
    Hello World
  </div>
);
```

#### Semantic Tokens
Component-specific tokens with semantic meaning

```tsx
import { semanticTokens } from 'design-components/styles';

const MyButton = () => (
  <button
    css={{
      ...semanticTokens.button.base,
      backgroundColor: semanticTokens.button.primary.backgroundColor,
      padding: semanticTokens.button.size.md.padding,
    }}
  >
    Custom Button
  </button>
);
```

### Token Categories

- **Colors**: Blue, Gray, Green (success), Yellow (warning), Red (error)
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: 0-16 scale (0px - 64px)
- **Border Radius**: none, sm, base, md, lg, xl, 2xl, full
- **Shadows**: none, sm, base, md, lg, xl
- **Transitions**: fast, base, slow

## 📚 Storybook

View all components and design tokens in Storybook:

```bash
pnpm storybook
```

Visit [http://localhost:6006](http://localhost:6006) to browse:
- **Components** - Interactive component examples
- **Design System/Foundation Tokens** - Base design values
- **Design System/Semantic Tokens** - Component-specific tokens

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd design-components

# Install dependencies
pnpm install

# Start Storybook
pnpm storybook
```

### Project Structure

```
design-components/
├── src/
│   ├── components/          # Component library
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── styles/              # Design tokens
│   │   ├── foundationTokens.ts
│   │   ├── semanticTokens.ts
│   │   └── index.ts
│   └── docs/                # Storybook documentation
│       ├── FoundationTokens.mdx
│       └── SemanticTokens.mdx
├── .storybook/              # Storybook configuration
└── package.json
```

### Tech Stack

- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Emotion** - CSS-in-JS styling
- **Vite 7** - Build tool
- **Storybook 9** - Component documentation
- **ESLint** - Code linting

## 🏗️ Building

```bash
# Build the library
pnpm build

# Build Storybook (static site)
pnpm build-storybook
```

## 📖 Design Philosophy

### Component Independence
Each component is fully self-contained with its own styles. No global CSS required.

### Token-Based Design
All design values are defined in design tokens, ensuring consistency across components.

### No Global Style Impact
This library does not apply any global styles or CSS resets, ensuring it won't interfere with your application's existing styles.

### TypeScript First
Full TypeScript support with exported types for all components and design tokens.

## 🎯 Roadmap

- [x] Button component
- [x] Foundation tokens
- [x] Semantic tokens
- [x] Storybook setup
- [ ] Input component
- [ ] Card component
- [ ] Badge component
- [ ] Modal component
- [ ] Tooltip component
- [ ] NPM publishing

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please use the [GitHub Issues](https://github.com/your-username/design-components/issues) page.

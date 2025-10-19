# Design Components

A React component library built with TypeScript, Tailwind CSS, and Storybook. This library provides a collection of reusable UI components with a comprehensive design system.

## 📖 Demo

**[View Live Storybook →](https://68f1d6c48510c8472511e8fe-bspdmjervm.chromatic.com/)**

## 🚀 Features

- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v4** - Modern utility-first CSS with `@theme` support
- ✅ **Storybook** - Interactive component documentation
- ✅ **Design Tokens** - Foundation and Semantic token system
- ✅ **Customizable** - Easy theming with CSS variables
- ✅ **Accessible** - Built with accessibility in mind
- ✅ **Tree-shakeable** - Optimized bundle size

## 📦 Installation

```bash
npm install @dwoongb/design-components
# or
pnpm add @dwoongb/design-components
# or
yarn add @dwoongb/design-components
```

## 🎯 Quick Start

```tsx
import { Button } from '@dwoongb/design-components';
import '@dwoongb/design-components/style.css';

function App() {
  return (
    <Button variant='primary' size='md'>
      Click me
    </Button>
  );
}
```

> **⚠️ Important Note:**
> This library **does not include Tailwind's Preflight** (base reset styles) to prevent conflicts with your existing styles. The component styles only include Tailwind utilities and component-specific tokens. Make sure your project has appropriate base styles set up.

## 🎨 Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@dwoongb/design-components';
import '@dwoongb/design-components/style.css';

function App() {
  return (
    <>
      <Button variant='primary' size='md'>
        Primary Button
      </Button>
      <Button variant='secondary' size='lg'>
        Secondary Button
      </Button>
      <Button variant='outline' size='sm'>
        Outline Button
      </Button>
      <Button disabled>Disabled Button</Button>
    </>
  );
}
```

#### Props

| Prop        | Type                                    | Default     | Description            |
| ----------- | --------------------------------------- | ----------- | ---------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Button variant         |
| `size`      | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | Button size            |
| `disabled`  | `boolean`                               | `false`     | Disable the button     |
| `className` | `string`                                | `''`        | Additional CSS classes |
| `children`  | `ReactNode`                             | -           | Button content         |

All standard HTML button attributes are also supported.

## 🎨 Styling & Theming

### Using Component Props

The easiest way is to use the provided props:

```tsx
<Button variant='primary' size='lg'>
  Click me
</Button>
```

### Using Tailwind Classes

You can use Tailwind utility classes directly:

```tsx
<Button className='bg-btn-primary hover:bg-btn-primary-hover'>
  Custom Styled Button
</Button>
```

### Using the `cn` Utility

For complex conditional styling, use the exported `cn` utility function:

```tsx
import { Button, cn } from '@dwoongb/design-components';

function MyComponent({ isActive, isLoading }) {
  return (
    <Button
      variant='primary'
      className={cn(
        'my-custom-class',
        isActive && 'ring-2 ring-blue-500',
        isLoading && 'animate-pulse',
        {
          'shadow-lg': isActive,
          'opacity-70': isLoading,
        }
      )}
    >
      Click me
    </Button>
  );
}
```

The `cn` function combines `clsx` (for conditional classes) and `tailwind-merge` (for resolving Tailwind class conflicts).

### Customizing with CSS Variables

Override the default theme by customizing CSS variables:

```css
/* Your global CSS file */
@import '@dwoongb/design-components/style.css';

:root {
  /* Customize button colors */
  --color-btn-primary: purple;
  --color-btn-primary-hover: darkpurple;
  --color-btn-primary-active: rebeccapurple;
}
```

### Advanced: Using Theme CSS

Import the theme CSS to extend with Tailwind v4's `@theme`:

```css
/* Your global.css */
@import 'tailwindcss';
@import '@dwoongb/design-components/theme.css';

@theme {
  /* Override specific colors */
  --color-btn-primary: purple;

  /* Add new custom colors */
  --color-custom: orange;
}
```

## 🎨 Available CSS Variables

### Button Colors

```css
--color-btn-primary: #3b82f6;
--color-btn-primary-hover: #2563eb;
--color-btn-primary-active: #1d4ed8;

--color-btn-secondary: #6b7280;
--color-btn-secondary-hover: #4b5563;
--color-btn-secondary-active: #374151;

--color-btn-outline: #3b82f6;
```

### Tailwind Utility Classes

You can use these semantic classes with your own elements:

```tsx
<button className='bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active'>
  Custom Button
</button>
```

## 🛠️ Utility Functions

### `cn` - Class Name Utility

A powerful utility function that combines `clsx` and `tailwind-merge` for handling conditional classes and Tailwind class conflicts.

```tsx
import { cn } from '@dwoongb/design-components';

// Simple usage
cn('px-4 py-2', 'text-white');
// → 'px-4 py-2 text-white'

// Conditional classes
cn('base-class', isActive && 'active-class', isFocused && 'focus-class');
// → 'base-class active-class focus-class'

// Object syntax
cn({
  'text-red-500': hasError,
  'text-green-500': isSuccess,
});
// → 'text-green-500'

// Resolving Tailwind conflicts
cn('px-4 py-2', 'px-6');
// → 'py-2 px-6' (px-4 is overridden by px-6)
```

This is especially useful when you need to:

- Apply conditional styles based on component state
- Override default component styles
- Avoid Tailwind class conflicts

## 📚 TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { ButtonProps } from '@dwoongb/design-components';

// Component props are fully typed
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### Exported Types

- `ButtonProps` - Props interface for the Button component

## 📚 Storybook

Run Storybook locally to view all components and design tokens:

```bash
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) to browse interactive component examples.

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm/pnpm/yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/dwoongb/design-components
cd design-components

# Install dependencies
npm install

# Start Storybook
npm run storybook
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
│   ├── utils/               # Utility functions
│   │   └── cn.ts            # Class name utility
│   ├── docs/                # Storybook documentation
│   ├── index.css            # Main CSS with @theme
│   ├── theme.css            # Theme-only CSS (customizable)
│   └── index.ts             # Main entry point
├── .storybook/              # Storybook configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

### Tech Stack

- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite 7** - Build tool
- **Storybook 9** - Component documentation
- **ESLint** - Code linting

## 🏗️ Building

```bash
# Build the library
npm run build

# Build Storybook (static site)
npm run build-storybook
```

## 📖 Design Philosophy

### Utility-First with Semantic Tokens

Combines Tailwind's utility-first approach with semantic design tokens for maximum flexibility.

### CSS Variables for Theming

All colors are defined as CSS variables, making it easy to create custom themes.

### No Global Style Impact

This library **intentionally excludes Tailwind's Preflight** (base reset styles). Only Tailwind utilities and component-specific tokens are included, ensuring it won't interfere with your application's existing base styles or global resets.

### TypeScript First

Full TypeScript support with exported types for all components and design tokens.

## 🎯 Roadmap

- [x] Button component
- [x] Foundation tokens
- [x] Semantic tokens
- [x] Storybook setup
- [x] Tailwind CSS v4 integration
- [x] NPM publishing
- [ ] Input component
- [ ] Card component
- [ ] Badge component
- [ ] Modal component
- [ ] Tooltip component

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please use the [GitHub Issues](https://github.com/dwoongb/design-components/issues) page.

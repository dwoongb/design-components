/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: {
        index: path.resolve(dirname, 'src/index.ts'),
        'styles/index': path.resolve(dirname, 'src/styles/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('styles/index')) {
            return 'styles/index.[format].js';
          }
          return 'index.[format].js';
        },
        chunkFileNames: () => {
          // This shouldn't be called, but if it is, put chunks in a subdirectory
          return '_chunks/[name]-[hash].js';
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@components': path.resolve(dirname, './src/components'),
      '@styles': path.resolve(dirname, './src/styles'),
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});

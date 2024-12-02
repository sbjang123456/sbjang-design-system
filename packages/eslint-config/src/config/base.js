import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { prettierConfig } from './prettier-config.js';
import { turboConfig } from './turbo.js';

export const baseConfig = tseslint.config(
  {
    // files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  turboConfig,
  prettierConfig,
  { ignores: ['dist'] }
);

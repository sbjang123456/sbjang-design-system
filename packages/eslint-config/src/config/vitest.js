import vitest from '@vitest/eslint-plugin';

export const vitestConfig = [
  {
    files: ['**/?(*.)+(test|spec).{js,jsx,ts,tsx}'],
    plugins: {
      vitest,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'import/namespace': 'off',
    },
  },
];

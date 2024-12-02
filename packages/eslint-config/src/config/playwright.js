import playwright from 'eslint-plugin-playwright';

export const playwrightConfig = [
  {
    ...playwright.configs['flat/recommended'],
    files: ['**/e2e/**/*.test.{js,ts}'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      // Customize Playwright rules
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
    },
  },
];

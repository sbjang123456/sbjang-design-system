import pluginStorybook from 'eslint-plugin-storybook';

export const storybookConfig = [
  ...pluginStorybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs|mdx)'],
    rules: {
      // example of overriding a rule
      'storybook/hierarchy-separator': 'error',
      // example of disabling a rule
      'storybook/default-exports': 'off',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
];

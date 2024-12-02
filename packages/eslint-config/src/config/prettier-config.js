import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * A custom ESLint configuration for libraries that use Prettier-Config.
 *
 * @type {import("eslint").Linter.Config}
 */
export const prettierConfig = [
  eslintConfigPrettier,
  {
    rules: {
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
];

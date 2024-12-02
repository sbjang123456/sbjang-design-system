import {
  baseConfig,
  importConfig,
  reactConfig,
  // turboConfig,
  //   jestConfig,
  //   mdxConfig,
  //   playwrightConfig,
  //   reactQueryConfig,
  reactTestingLibraryConfig,
  //   storybookConfig,
  //   tailwindConfig,
  vitestConfig,
  prettierConfig,
} from '@sbjang/eslint-config';

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  ...importConfig,
  ...reactConfig,
  // ...turboConfig,
  //   ...jestConfig,
  //   ...mdxConfig,
  //   ...playwrightConfig,
  //   ...reactQueryConfig,
  ...reactTestingLibraryConfig,
  //   ...storybookConfig,
  //   ...tailwindConfig,
  ...vitestConfig,
  ...prettierConfig,
];

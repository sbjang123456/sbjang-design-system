import {
    baseConfig,
    importConfig,
    nextJsConfig,
    reactConfig,
  } from '@sbjang/eslint-config';
  
  /** @type {import("eslint").Linter.Config} */
  export default [
    ...baseConfig,
    ...importConfig,
    ...reactConfig,
    ...nextJsConfig,
  ];
  
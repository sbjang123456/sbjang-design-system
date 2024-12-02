import { baseConfig, importConfig } from './src/index.js';

/** @type {import("eslint").Linter.Config} */
export default [...baseConfig, ...importConfig];

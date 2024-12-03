// @ts-check

import { getEslintFixCmd } from '../../lint-staged.common.mjs';
import baseConfig from '../../lint-staged.config.mjs';

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  ...baseConfig,
  '**/*.{js,jsx,ts,tsx,mjs,cjs}': (filenames) => {
    return getEslintFixCmd({
      cwd: import.meta.dirname,
      fix: true,
      cache: true,
      rules: ['react-hooks/exhaustive-deps: off'],
      maxWarnings: 25,
      files: filenames,
    });
  },
};

export default rules;

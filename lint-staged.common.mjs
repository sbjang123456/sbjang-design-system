// @ts-check

import path from 'path';
const escape = await import('shell-quote').then((m) => m.quote);

const isWin = process.platform === 'win32';

const eslintGlobalRulesForFix = ['react-hooks/exhaustive-deps: off'];

/**
 * @param {{cwd: string, files: string[], fix: boolean, fixType?: ('problem'|'suggestion'|'layout'|'directive')[], cache: boolean, rules?: string[], maxWarnings?: number}} params
 * @returns {string} eslint command
 */
const getEslintFixCmd = ({
  cwd,
  files,
  rules,
  fix,
  fixType,
  cache,
  maxWarnings,
}) => {
  const cliRules = [...(rules ?? []), ...eslintGlobalRulesForFix]
    .filter((rule) => rule.trim().length > 0)
    .map((r) => `"${r.trim()}"`);

  const cliFixType = [...(fixType ?? ['layout'])].filter(
    (type) => type.trim().length > 0
  );

  const args = [
    cache ? '--cache' : '',
    fix ? '--fix' : '',
    cliFixType.length > 0 ? `--fix-type ${cliFixType.join(',')}` : '',
    maxWarnings !== undefined ? `--max-warnings=${maxWarnings}` : '',
    cliRules.length > 0 ? `--rule ${cliRules.join('--rule ')}` : '',
    files.map((f) => `"./${path.relative(cwd, f)}"`).join(' '),
  ].join(' ');
  return `eslint ${args}`;
};

/**
 * @param {string[]} filenames
 * @returns {string}
 */
const concatFilesForPrettier = (filenames) =>
  filenames
    .map((filename) => `"${isWin ? filename : escape([filename])}"`)
    .join(' ');

export { concatFilesForPrettier, getEslintFixCmd };

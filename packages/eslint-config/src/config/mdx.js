import * as pluginMdx from 'eslint-plugin-mdx';
import tseslint from 'typescript-eslint';

export const mdxConfig = [
  {
    ...pluginMdx.flat,
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/consistent-type-exports': 'off',
    },
    processor: pluginMdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
  },
  {
    ...pluginMdx.flatCodeBlocks,
    rules: {
      ...pluginMdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];

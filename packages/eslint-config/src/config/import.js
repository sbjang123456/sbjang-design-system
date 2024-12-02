import pluginCssImport from 'eslint-plugin-css-import-order';
import pluginImport from 'eslint-plugin-import';

export const importConfig = [
  {
    ...pluginImport.flatConfigs.recommended,
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {},
  },
  {
    plugins: {
      'css-import-order': pluginCssImport,
    },
    rules: {
      ...pluginCssImport.configs.recommended.rules,
    },
  },
];

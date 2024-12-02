import pluginTailwindcss from 'eslint-plugin-tailwindcss';

export const tailwindConfig = [
  ...pluginTailwindcss.configs['flat/recommended'],
  {
    files: ['**/*.{tsx,jsx}'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];

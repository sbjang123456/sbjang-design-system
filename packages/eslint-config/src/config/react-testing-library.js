import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

export const reactTestingLibraryConfig = [
  {
    files: ['**/?(*.)+(test|spec).{js,jsx,ts,tsx}'],
    ...eslintPluginTestingLibrary.configs['flat/react'],
  },
];

import pluginJest from 'eslint-plugin-jest';

export const jestConfig = [
  {
    files: ['**/?(*.)+(test|spec).{js,jsx,ts,tsx}'],
    ...pluginJest.configs['flat/recommended'],
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      // No standalone expect is relaxed for test files
      'jest/no-standalone-expect': 'off',
      'jest/consistent-test-it': ['error', { fn: 'it' }],
      'jest/no-commented-out-tests': 'error',
      'jest/no-conditional-in-test': 'error',
      'jest/no-duplicate-hooks': 'error',
      // Enable Jest rules
      'jest/no-focused-tests': 'error',
      'jest/no-test-return-statement': 'error',
      'jest/prefer-hooks-in-order': 'error',
      'jest/prefer-hooks-on-top': 'error',
      'jest/prefer-mock-promise-shorthand': 'error',
      'jest/prefer-strict-equal': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/unbound-method': 'error',
      'jest/prefer-to-be': 'error',
      'jest/prefer-to-contain': 'error',
      'jest/no-restricted-matchers': [
        'error',
        {
          toBeFalsy: null,
          toBeTruthy: null,
        },
      ],
    },
  },
];

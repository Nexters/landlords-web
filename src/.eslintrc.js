module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-one-expression-per-line': 0,
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
    'react/prop-types': 0,
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] },
    ],
    'eol-last': ['error', 'always'],
    'max-len': ['error', {
      'code': 100,
      'ignoreComments': false,
      'ignoreUrls': true,
    }],
    'semi': 2,
    'indent': [
      'error', 2,
      { 'SwitchCase': 1 },
    ],
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
    ],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-curly-spacing': ['error', {
      'when': 'always',
      'allowMultiline': false,
      'spacing': {
        'objectLiterals': 'never',
      },
    }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};

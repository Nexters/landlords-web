module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};

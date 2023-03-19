module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'semi':['error','never'],
    'max-len':['error',{ 'code':120}],
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'quotes': ['error', 'single']
  },
};

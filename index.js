module.exports = {
  extends: [
    'eslint-config-airbnb-typescript',
    'eslint-config-airbnb/hooks',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    'eslint-config-prettier/@typescript-eslint',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'no-plusplus': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 1,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};

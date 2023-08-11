module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    // 'plugin:i18next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['dist', 'vite.config.ts', 'vite-env.d.ts'],
  plugins: ['i18next', 'promise', 'prettier', '@typescript-eslint'],
  rules: {
    // 'react/jsx-indent': [2, 2],
    // 'react/jsx-indent-props': [2, 2],
    // indent: [2, 2],
    // indent: [2, 2, { "SwitchCase": 1, "FunctionDeclaration": { "parameters": "first" } }],
    // 'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    // 'max-len': ['warn', { code: 100, ignoreComments: true }],
    'import/no-unresolved': 'off',
    // 'import/prefer-default-export': 'off',
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    // 'react/require-default-props': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'no-shadow': 'off',
    // 'import/extensions': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'no-underscore-dangle': 'off',
    // 'i18next/no-literal-string': ['warn', { markupOnly: true }],
    // 'react/function-component-definition': [
    //   2,
    //   {
    //     namedComponents: 'arrow-function',
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    // 'react/jsx-max-props-per-line': ['error', { when: 'always' }],
    // 'no-param-reassign': [
    //   'error',
    //   {
    //     props: true,
    //     ignorePropertyModificationsFor: ['state'],
    //   },
    // ],
    // 'jsx-a11y/click-events-have-key-events': 'warn',
  },
  overrides: [
    {
      files: ['.eslintrc.cjs'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};

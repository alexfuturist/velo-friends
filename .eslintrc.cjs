module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["dist", "vite.config.ts", "vite-env.d.ts"],
  plugins: ["i18next", "promise", "prettier", "@typescript-eslint"],
  rules: {
    "import/no-unresolved": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
  },
  overrides: [
    {
      files: [".eslintrc.cjs"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};

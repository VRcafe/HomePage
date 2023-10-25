module.exports = {
  // 適用範囲の制限
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // create-react-appのデフォルト設定
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    // ESLintのフォーマットをPrettierに変更する
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {},
};

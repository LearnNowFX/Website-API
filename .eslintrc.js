module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/no-explicit-any": "always",
    "@typescript-eslint/interface-name-prefix": "always",
    "@typescript-eslint/explicit-function-return-type": "always",
    "@typescript-eslint/explicit-module-boundary-types": "always",
  },
};

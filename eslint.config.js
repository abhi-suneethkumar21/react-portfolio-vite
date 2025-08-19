import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  // Base JS recommended rules
  js.configs.recommended,

  react.configs.flat.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/prop-types": "off",
      "react/display-name": "off",
      "no-unused-vars": "warn",
    },
  },
];

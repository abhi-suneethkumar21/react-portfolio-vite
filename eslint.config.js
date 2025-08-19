// eslint.config.js (ESLint v9+ flat config)
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // React recommended rules (flat preset)
  react.configs.flat.recommended,

  // Your project defaults + overrides (comes LAST so it wins)
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react, // registers "react/" rules
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // 🔕 turn off prop-types entirely
      "react/prop-types": "off",
      // optional: turn off displayName
      "react/display-name": "off",
      // keep unused vars as warnings
      "no-unused-vars": "warn",
    },
  },
];

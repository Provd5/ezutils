const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      path.join(__dirname, "tsconfig.app.json"),
      path.join(__dirname, "tsconfig.node.json"),
    ],
  },
  plugins: [
    "react-refresh",
    "unused-imports",
    "simple-import-sort",
    "import",
    "@typescript-eslint",
    "eslint-plugin-react",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-key": "error",
    "no-empty-pattern": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "no-console": "warn",
    "unused-imports/no-unused-imports-ts": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^vite", "^@", "^\\w"],
          ["^(type|types|~/type|~/types)"],
          ["^~/"],
          ["^(./|../)"],
        ],
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};

module.exports = config;

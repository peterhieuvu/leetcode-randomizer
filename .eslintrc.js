module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "jsx-quotes": [
      "error",
      "prefer-single",
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
      },
    ],
    "indent": [
      "error",
      4,
    ],
    "@typescript-eslint/indent": [
      "error",
      4,
    ],
    "react/jsx-indent": [
      "error",
      4,
    ],
    "react/jsx-indent-props": [
      "error",
      4,
    ],
  }
};

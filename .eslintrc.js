module.exports = {
  root:true,
  extends: [
    "@takamachi/eslint-config/presets/react-typescript-prettier",
    'plugin:compat/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
}

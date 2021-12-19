module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    '@takamachi/eslint-config/presets/react-typescript-prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      settings: {
        jest: {
          version: 27,
        },
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
};

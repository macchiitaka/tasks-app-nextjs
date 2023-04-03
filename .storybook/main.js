module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      fastRefresh: true,
    },
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  features: {
    interactionsDebugger: true,
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../storybook-public'],
};

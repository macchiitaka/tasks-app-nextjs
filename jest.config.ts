import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
};

// https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525
const jestConfig = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const nextJestConfig = await createJestConfig(customJestConfig)();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...nextJestConfig,
    transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  };
};

export default jestConfig;

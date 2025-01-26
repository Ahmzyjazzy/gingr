import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    '^@decide-be/(.*)$': '<rootDir>/$1',
    '^@decide-be/config/(.*)$': 'config/$1',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s', '!**/migrations/**'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  displayName: 'GingrApi',
};

export default config;

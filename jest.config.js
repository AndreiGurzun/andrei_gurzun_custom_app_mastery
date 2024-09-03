/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/test/mocks/svg.js',
        '^@src(.*)$': '<rootDir>/src$1',
        '^@pages(.*)$': '<rootDir>/pages$1'
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    testTimeout: 100000
};

module.exports = createJestConfig(customJestConfig);

// TODO: check this
process.env = Object.assign(process.env, {
    ENV_GANNETT_API_HOST: 'https://origin-staging-content-api.gannettdigital.com',
    ENV_GANNETT_API_TOKEN: 'fake_api_token',
    ENVIRONMENT: 'fake Environment',
    Owner: 'fake Owner',
    Region: 'fake Region',
    NEXT_PUBLIC_APP_VERSION: 'fake NEXT_PUBLIC_APP_VERSION',
    NEXT_PUBLIC_ASSET_PREFIX: '/elections'
});

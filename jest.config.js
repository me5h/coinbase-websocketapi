module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx'],

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/*.spec.js?(x)'],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],

    // Indicates whether each individual test should be reported during the run
    verbose: false,

    //preset: 'jest-preset-preact',


    "setupFilesAfterEnv": [
        "<rootDir>/setupTests.js"
    ]
}

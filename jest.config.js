const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, 'src'),
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    reporters: [
        'default', 
        ['jest-junit', { suiteName: 'unit tests', output: './test-results/results.xml' }]
    ],
    setupTestFrameworkScriptFile: path.join(__dirname, 'enzymeSetup.js'),
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    coverageDirectory: path.join(__dirname, 'coverage'),
    notify: true,
    verbose: true
};

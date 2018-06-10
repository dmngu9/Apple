const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, 'src'),
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    coverageDirectory: path.join(__dirname, 'coverage'),
    notify: true,
    verbose: true
};

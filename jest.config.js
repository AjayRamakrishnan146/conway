// jest.config.js
module.exports = {
    // other Jest configurations...
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.js',
      '!src/index.js', // Exclude entry point if it doesn't have meaningful code
      '!src/tests/**/*.js', // Exclude test files in a tests subdirectory
    ],
  };
  
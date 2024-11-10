module.exports = function () {
  return {
    autoDetect: true,

    files: [
      'src/**/*.{ts,tsx}',
      'src/**/*.scss',
      '!src/**/*.test.{ts,tsx}',
      '!src/**/*.spec.{ts,tsx}',
      { pattern: 'package.json', instrument: false },
      { pattern: 'tsconfig.json', instrument: false },
      { pattern: 'vite.config.ts', instrument: false },
    ],

    tests: ['src/**/*.test.{ts,tsx}', 'src/**/*.spec.{ts,tsx}'],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'vitest',

    setup: function () {
      require('./src/test/setup/index.ts')
    },
  }
}

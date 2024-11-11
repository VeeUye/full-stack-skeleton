// eslint-disable-next-line no-undef
module.exports = function () {
  return {
    testFramework: 'vitest',
    files: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.test.{ts,tsx}',
      { pattern: 'package.json', instrument: false },
      { pattern: 'tsconfig.json', instrument: false },
      { pattern: 'vite.config.ts', instrument: false },
      { pattern: 'vitest.config.ts', instrument: false },
    ],
    tests: ['src/**/*.test.{ts,tsx}'],
    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules',
      },
    },
    setup: function (wallaby) {
      wallaby.testFramework.configure({
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./src/test/setup/index.ts'],
      })
    },
  }
}

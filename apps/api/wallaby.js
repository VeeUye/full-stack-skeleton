// eslint-disable-next-line no-undef
module.exports = function () {
  return {
    autoDetect: true,
    files: ['src/**/*.ts', '!src/**/__tests__/**/*.ts'],
    tests: ['src/**/__tests__/**/*.ts'],
    env: {
      type: 'node',
    },
    debug: true,
  }
}

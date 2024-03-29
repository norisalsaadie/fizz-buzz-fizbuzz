module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js'
    ],
    tests: [
      'test/**/*spec.js'
    ],
    env: {
      type: 'node'
    },
    testFramework: 'ava'
  }
}

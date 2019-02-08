module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Firefox'],
    files: [
      'test/**/*_test.js',
      {
        pattern: 'dist/*.js',
        watched: true
      },
    ]
  })
}
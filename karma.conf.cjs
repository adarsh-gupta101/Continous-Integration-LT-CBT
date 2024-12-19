module.exports = function (config) {
  const webdriverConfig = {
    hostname: 'hub.lambdatest.com',
    port: 80,
  };

  config.set({
    basePath: '',
    frameworks: ['jasmine'], // Use Jasmine as the testing framework
    files: [
      // 'models/Book.js',  // Ensure this is an ES module, use .mjs or proper module setup
      // 'models/Review.js', // Ensure all your models are ES modules
      // 'services/BookService.js', // Similarly for other JS files
      // 'spec/support/Book.spec.js',  // Ensure your test files are also using ES module syntax
      // 'spec/support/BookService.spec.js',
       'test/*.js', // Include all test files
        'src/*.js'
    ],
    
    preprocessors: {}, // Add preprocessors if needed
    reporters: ['mocha'], // Use Mocha-style reporting
    mochaReporter: {
      output: 'full', // Display full results in the terminal
    },
    
    customLaunchers: {
      LT_Chrome_Test: {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'chrome',
        browserVersion: 'latest',
        platform: 'Windows 11',
        name: 'Jasmine-Karma-CI-Test',
        build: 'Jasmine-Karma-CI-Test',
        tunnel: true,
        user: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
      },
      // Add Safari or other browser launchers if needed
    },
    browsers: ['LT_Chrome_Test'], // Use the LambdaTest custom launcher
    singleRun: true, // Exit after running tests
    autoWatch: false, // Disable auto-watch for continuous testing
    concurrency: 1, // Run one test at a time
    logLevel: config.LOG_DEBUG, // Enable detailed logging for debugging
    browserNoActivityTimeout: 600000, // Increase timeout for LambdaTest
    browserDisconnectTimeout: 300000,
    browserDisconnectTolerance: 1,
  });
};

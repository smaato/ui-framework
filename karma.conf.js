'use strict';

var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({
    frameworks: [
      'phantomjs-shim',
      'browserify',
      'jasmine'
    ],
    basePath: '',
    // Prevent 404s showing up when assets are requested by tests.
    proxies: {
      '/img/': 'http://localhost:9876/base/test/assets/img/'
    },
    // Specify the JS to compile to create a functioning test environment.
    files: [
      {
        pattern: 'test/assets/img/*.*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      },
      'node_modules/babel-core/browser-polyfill.js',
      'src/framework/**/*.jsx',
      'src/framework/**/*.js'
    ],
    exclude: [
      // If this is not excluded it will complain that that babel-core is already included
      'src/framework/index.js'
    ],
    browsers: ['PhantomJS'],
    // The reporters with which to surface test results.
    reporters: [
      'spec',
      'junit'
    ],
    coverageReporter: {
      dir: 'reports/coverage'
    },
    junitReporter: {
      outputDir: 'reports/karma'
    },
    // Specify preprocessors through which files should be run, excluding test
    // files.
    preprocessors: {
      'src/framework/**/*.js': ['browserify'],
      'src/framework/**/*.jsx': ['browserify']
    },
    // Configuration for the above `browserify` preprocessor.
    browserify: {
      debug: true,
      transform: ['babelify']
    }
  });
};

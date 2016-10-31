var webpackCfg = require('./webpack.config');

// Set node environment to testing
process.env.NODE_ENV = 'test';

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [ 'PhantomJS' ],
    // browsers: [ 'Chrome' ],
    files: [
      'test/loadtests.js'
    ],
    port: 8001,
    captureTimeout: 60000,
    frameworks: [ 'mocha', 'chai'],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: ['spec', 'coverage'],
    preprocessors: {
      'test/loadtests.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    },
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: true // print the time elapsed for each spec
    },
    plugins: [
      'karma-babel-preprocessor',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-spec-reporter'
    ]
  });
};

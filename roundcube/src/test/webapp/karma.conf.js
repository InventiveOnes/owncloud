// Karma configuration

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      '../../../bower_components/jquery/dist/jquery.js',
      '../../../bower_components/jquery-ui/jquery-ui.js',
      'mocks/*.js',
      '../../main/php/js/*.js',
      'frontend/*.js',
    ],
    exclude: ['src/test/webapp/karma.conf*.js'],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    reporters: ['progress', 'junit'],

    // the default configuration
    junitReporter: {
      outputFile: 'test-results.xml',
      suite: ''
    },
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
    plugins: ['karma-jasmine','karma-phantomjs-launcher']
  });
};

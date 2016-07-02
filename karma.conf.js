// Karma configuration
// Generated on Fri Jun 24 2016 13:51:19 GMT+0530 (India Standard Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      file: 'coverage.txt'
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    // list of files / patterns to load in the browser
    files: [
      //{ pattern: 'app/services/**/*.js', included: true },
      { pattern: 'app/filters/**/*.js', included: true },
      //{ pattern: 'app/directives/**/*.js', included: true },
      //{ pattern: 'app/modules/**/*.js', included: false },
      { pattern: 'test/**/*.test.js', included: true },
      { pattern: 'test/**/*Spec.js', included: true },
      //'test/test.config.js',
      //'app/bower_components/angular/angular.min.js',
      //'app/bower_components/requireJs/require.js'
      //'app/main.js',
      //'app/app.js',
      //'app/applicationPath.js',
      //'app/routeResolverService.js',
      //'app/routes.js',
      'app/services/**/*.js',
      //'app/constants/**/*.js',
      //'app/directives/**/*.js',
      //'app/filters/**/*.js',
      //'app/modules/**/*.js',
      //'app/layouts/**/*.js',
      //'test/**/*.test.js',
      'test/**/*Spec.js',
      //'app/templates/**/*.html'
      //'app/main.js'
    ],

    // list of files to exclude
    exclude: [
      '/gruntfile.js',
      'app/bower_components/requireJs/require.js',
      'app/main.js',
      'app/app.js',
      'app/applicationPath.js',
      'app/routeResolverService.js',
      'app/routes.js',
    ],
    //Plugins
    plugins: [
      //'karma-chrome-launcher',
      'karma-coverage',
      //'karma-firefox-launcher',
      //'karma-growl-reporter',
      //'karma-html-reporter',
      'karma-jasmine',
      //'karma-ng-html2js-preprocessor',
      //'karma-phantomjs-launcher',
      //'karma-spec-reporter',
      //'karma-browserify'
      'karma-requirejs'
    ],

    junitReporter: {
      outputFile: 'coverage/test-results.xml'
    },
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/templates/**/*.html': ['ng-html2js'],
      '{app/directives/**/*.js,app/constants/**/*.js,app/filters/**/*.js,app/modules/**/*.js,app/layouts/**/*.js,app/services/**/*.js}': ['coverage']
    },

    // web server port
    port: 9000,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    //captureTimeout: 60000, // it was already there
    //browserDisconnectTimeout: 10000,
    //browserDisconnectTolerance: 1,
    //browserNoActivityTimeout: 60000,//by default 10000
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

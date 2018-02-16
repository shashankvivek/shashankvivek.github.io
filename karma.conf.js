module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            //search directive
            './scripts/directive/search/search-dir.js',
            './scripts/directive/search/controller/search-controller.js',
            './scripts/directive/search/service/search-svc.js',
            // report directive
            './scripts/directive/report/report-dir.js',
            // site files
            './scripts/script.js',
            './scripts/controller/site-controller.js',
            // filter
            './scripts/filter/date-time-filter.js',
            // spec files
            './tests/controller/site-controller.spec.js',
            './tests/directive/search/search-controller.spec.js',
            './tests/directive/search/search-svc.spec.js',
            './tests/directive/search/search-dir.spec.js',
            './tests/directive/report/report-dir.spec.js',
            './tests/filter/date-time-filter.spec.js'
        ],
        exclude: [

        ],
        preprocessors: {
        },
        // reporters: ['progress'],
        reporters: ['spec'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}
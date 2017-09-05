module.exports = function (config) {
    config.set({
        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['.ts', 'tsx', '.js'],
                modules: ['node_modules']
            },
            module: {
                rules: [{
                    test: /\.tsx?$/,
                    loaders: ['babel-loader?presets[]=es2015', 'ts-loader']
                }, {
                    test: /\.(jsx?)$/,
                    loaders: ['babel'],
                    exclude: /node_modules/
                }]
            }
        },
        sourceMap: true,
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/babel-polyfill/dist/polyfill.min.js',
            {pattern: 'test/**/*.ts', watched: false}
        ],
        exclude: [],
        preprocessors: {
            'test/**/*.ts': ['webpack', 'sourcemap']
        },
        reporters: [
            'progress'
        ],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        mime: {
            'text/x-typescript': ['ts','tsx']
        }
    })
};

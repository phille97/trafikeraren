const webpack = require('webpack');

module.exports = {
    entry: {
        router: ['./trafikeraren/static/js/src/router.js']
    },
    output: {
        path: __dirname + '/trafikeraren_app/static/js/build',
        filename: 'main.js',
        publicPath: '/static/js/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            }
        ]
    },
};

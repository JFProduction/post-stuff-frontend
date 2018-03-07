var webpack = require('webpack'),
    path = require('path')

module.exports = {
    entry: {
        app: './server/public/js/app.js'
    },
    output: {
        filename: './web/bundle.js',
        sourceMapFilename: 'web/bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            cache: true,
            extractComments: true,
            parallel: true,
            uglifyOptions: {
                compress: true
            }
        })
    ]
});

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'assets/[name].bundle.[chunkhash].js',
        chunkFilename: 'assets/[name].chunk.[chunkhash].js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                cache: true,
                extractComments: true,
                parallel: true,
                uglifyOptions: {
                    compress: true
                }
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Apple',
            template: './src/index.html',
        })
    ]
});

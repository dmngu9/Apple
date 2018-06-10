const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 8000,
        hot: true,
        inline: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});

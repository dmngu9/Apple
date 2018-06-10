const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('../webpack.config');
module.exports = webpackMerge(baseConfig, {
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: 'async'
        }
    },

    stats: 'errors-only'
});

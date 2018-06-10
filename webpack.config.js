const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
    context: __dirname,
    entry: './src/app.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'assets',
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['node_modules', 'src']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=ts']
            },
            {
                test: /\.react.svg$/,
                exclude: /node_modules/,
                loader: 'svg-react-loader'
            },
            {
                test: /(\.png|\.svg|\.gif|\.eot|\.ttf|\.woff)$/,
                exclude: /\.react.svg$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),

        new ProgressBarPlugin({
            format: 'Building Apple: [:bar] :percent (:elapsed seconds)'
        }),

        new HappyPack({
            id: 'ts',
            threads: 4,
            loaders: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        happyPackMode: true
                    }
                }
            ]
        }),

        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true
        }),

        new HtmlWebpackPlugin({
            title: 'Apple',
            template: './src/index.html',
            excludeChunks: 'vendors~main'
        }),

        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: false,
            cwd: process.cwd()
        }),

        process.env.ANALYZE &&
            new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                openAnalyzer: true
            })
    ].filter(Boolean)
};

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        main: ['webpack-hot-middleware/client?reload=true&timeout=2000', './src/client/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new NodePolyfillPlugin(),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: path.resolve(require.resolve('process/browser')), // Fix for fully specified path
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { 'runtime': 'automatic' }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            buffer: require.resolve('buffer/'), // Polyfill for buffer
            stream: require.resolve('stream-browserify'), // Stream polyfill
            util: require.resolve('util/'), // Utility polyfill
            process: require.resolve('process/browser'), // Fix for process
            net: false,
            async_hooks: false,
        }
    }
};

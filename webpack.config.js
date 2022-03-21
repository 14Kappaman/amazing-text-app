const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './client/alex_instruments_client.ts',
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: "index.js"
    },
    devtool: "source-map",
    plugins: [
            new htmlWebpackPlugin({
                template: "./public/index.html"
            }),
        new webpack.ProvidePlugin({
            TextDecoder: ['text-encoding', 'TextDecoder'],
            TextEncoder: ['text-encoding', 'TextEncoder']
        })
    ],
    resolve: {
        extensions: ['.ts', ".tsx", '.js', 'jsx']
    },
    module: {
        rules: [
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                type: "asset/source",
                test: /\.glsl$/
            }
        ],
    },

    /*devServer: {
        host: 'localhost',
        port: 3000,
        publicPath: "/",
        contentBase: "./public",
        inline: true,
        hot: true
    }*/
};
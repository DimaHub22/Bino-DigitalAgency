const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/script.js',
    mode: 'development',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: '.dist',
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "images", to: "images" },
                { from: "icons", to: "icons" },
                { from: "fonts", to: "fonts" },
            ],
        }),
    ],
};
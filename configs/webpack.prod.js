const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (baseDir) {
    return {
        module: {
            rules: [
                // Styles
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { url: false } },
                        'sass-loader',
                    ],
                    exclude: /node_modules/,
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                minify: true,
                template: path.join(baseDir, 'index.html'),
                title: 'Kirenkov.me'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
            }),
        ]
    };
};
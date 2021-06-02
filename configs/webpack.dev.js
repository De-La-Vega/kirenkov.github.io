const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (baseDir) {
    return {
        module: {
            rules: [
                // Styles
                {
                    test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(baseDir, 'index.html'),
                title: '[DEV] Kirenkov.me'
            }),
            new WebpackBuildNotifierPlugin({
                title: '[DEV] Kirenkov.me',
                logo: path.resolve('../src/assets/images/logo.svg'),
                suppressSuccess: true
            }),
            new StyleLintPlugin({
                context: path.join(__dirname, '../src'),
                configFile: path.join(__dirname, '../.stylelintrc.json')
            }),
        ],
    };
};
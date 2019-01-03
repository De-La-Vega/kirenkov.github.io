const webpack = require('webpack');
const path = require('path');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const gitRevisionPlugin = new GitRevisionPlugin({ branch: true });

const APP_DIR = path.join(__dirname, '../src');

const config = {
    context: APP_DIR,

    entry: {
        main: [
            'core-js/fn/promise',
            path.resolve(APP_DIR, 'index')
        ],
    },

    output: {
        path: path.resolve(__dirname, '../docs'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
    },

    stats: {
        children: false
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    'awesome-typescript-loader',
                    {
                        loader: 'tslint-loader',
                        options: {
                            tsConfigFile: './tsconfig.json',
                            transpileOnly: true,
                        }
                    },

                ],
                include: APP_DIR
            },
            // Fonts
            {
                test: /\.woff?2(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff',
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream',
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            // Images
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
        ],
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                sourceMap: true,
                exclude: [
                    /\.html$/,
                    /\.s?css$/,
                    /node_modules\//
                ]
            }),
            new OptimizeCssAssetsPlugin({}),
        ],
        splitChunks: {
            cacheGroups: {
                // Disable default webpack cacheGroups
                default: false,
                vendors: false,

                // common chunk
                common: {
                    chunks: 'async',
                    enforce: true,
                    minChunks: 2,
                    name: 'common',
                    priority: 20,
                    reuseExistingChunk: true
                },

                // vendor chunk
                vendor: {
                    // async + async chunks
                    chunks: 'all',
                    name: 'vendor',
                    // import file path containing node_modules
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.scss', '.css'],
        modules: [path.resolve(__dirname, '../src'), 'node_modules']
    },

    plugins: [
        new CleanWebpackPlugin(
            [path.join(__dirname, '../build')],
            {
                root: path.resolve(__dirname, '..')
            }
        ),
        new CopyWebpackPlugin(
            [
                // {
                //     from: path.join(APP_DIR, 'assets/fonts'),
                //     to: path.join(__dirname, '../docs/assets/fonts')
                // },
                {
                    from: path.join(APP_DIR, 'assets/images'),
                    to: path.join(__dirname, '../docs/assets/images')
                },
                {
                    from: path.join(APP_DIR, 'assets/favicons'),
                    to: path.join(__dirname, '../docs')
                }
            ]
        ),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en-gb|ru)$/),
    ]
};

module.exports = (env, argv) => {
    const mode = argv.mode;
    const modeConfig = require(`./webpack.${mode === 'production' ? 'prod' : 'dev'}.js`)(APP_DIR);

    config.mode = mode;

    if (mode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            contentBase: path.join(__dirname, '../docs/assets'),
            stats: {
                cachedAssets: false,
                chunkOrigins: false,
                colors: true,
                moduleTrace: false,
                providedExports: false,
                reasons: false,
                usedExports: false
            },
            host: '0.0.0.0',
            hot: false, // doesn't work with react 16
            disableHostCheck: true,
            historyApiFallback: true,
            proxy: {
                '/api': {
                    target: 'http://[::1]:8091'
                },
            }
        };
    }

    if (env && env.analyze) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    // Import module RULES.
    if (modeConfig.module && Array.isArray(modeConfig.module.rules)) {
        config.module.rules = config.module.rules.concat(modeConfig.module.rules);
    }

    // Import PLUGINS.
    if (Array.isArray(modeConfig.plugins)) {
        config.plugins = config.plugins.concat(modeConfig.plugins);
    }

    config.plugins.push(
        new webpack.DefinePlugin({
            // Build environment.
            'process.env.NODE_ENV': JSON.stringify(mode),
            // Build version.
            BUILD_VERSION: JSON.stringify(gitRevisionPlugin.version()),
        })
    );

    return config;
}
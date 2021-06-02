const webpack = require('webpack');
const path = require('path');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin({ branch: true });

const APP_DIR = path.join(__dirname, '../src');

const config = {
    context: APP_DIR,

    entry: {
        main: [
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
                test: /\.tsx?$/,
                loader: 'ts-loader'
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
            new TerserPlugin({
                test: /\.js($|\?)/i,
                exclude: [
                    /\.html$/,
                    /\.s?css$/,
                    /node_modules\//,
                    /libs\//,
                ],
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
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
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(APP_DIR, 'assets/images'),
                    to: path.join(__dirname, '../docs/assets/images')
                },
                {
                    from: path.join(APP_DIR, 'assets/favicons'),
                    to: path.join(__dirname, '../docs')
                }
            ]
        }),
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
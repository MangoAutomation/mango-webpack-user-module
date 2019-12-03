const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        userModule: './src/userModule.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertAt: {
                                before: 'meta[name="user-styles-after-here"]'
                            }
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash].[ext]'
                    }
                }]
            }
        ]
    },
    optimization: {
        splitChunks: false
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        publicPath: '/rest/v2/file-stores/public/userModule/dist/',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: 'userModule'
    },
    externals: {
        'angular': 'angular',
        'cldrjs': 'cldrjs',
        'cldr-data': 'cldr-data',
        'file-saver': 'file-saver',
        'globalize': 'globalize',
        'ipaddr.js': 'ipaddr.js',
        'jquery': 'jquery',
        'js-sha512': 'sha512',
        'jszip': 'jszip',
        'mathjs': 'mathjs',
        'moment': 'moment',
        'moment-timezone': 'moment-timezone',
        'papaparse': 'papaparse',
        'pdfmake': 'pdfmake',
        'plotly.js': 'plotly.js',
        'stacktrace-js': 'stacktrace-js',
        'tinycolor2': 'tinycolor2',
        'xlsx': 'xlsx',
        'd3': 'd3'
    }
};
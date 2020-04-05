/**
 * Production configuration for the bundler
 *
 * Created on April 05, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */

/* Handle OS path resolution: absolute, relative paths */
const path = require('path')

/* To access webpack runtime */
const webpack = require('webpack')

/* Cleaner for the context path */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/* Extract raw text from a css file */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/* Create an `index.html` page from a template file */
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* Minimizer */
const TerserJSPlugin = require('terser-webpack-plugin')

// Merge this with common configuration
module.exports = {
    name: 'ralflorent.github.io',
    mode: 'production',
    devtool: 'source-map',

    entry: {
        'bundle': './src/index.tsx',
    },

    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
    },

    resolve: {
        modules: ['node_modules', path.join(__dirname, 'src')],
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                include: /\.min\.js$/,
            }),
        ],
    },

    module: {
        // Allows to specify several loaders within the webpack configuration
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            {
                test: /\.js(x?)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'source-map-loader'
            },
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            title: `Ralph Florent | Home`,
            template: 'src/index.ejs',
            baseUrl: '/'
        }),
    ]
}

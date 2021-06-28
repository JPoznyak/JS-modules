const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.s[ca]ss$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i, 
                use: 'file-loader'
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),

        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),

        new BundleAnalyzerPlugin()
    ]
}
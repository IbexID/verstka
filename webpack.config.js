const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    entry: {
        legalide: ['./src/js/legalide.js', './src/styles/legalide.scss'],
        welcome: ['./src/js/welcome.js', './src/styles/welcome.scss'],
    },
    output: {

        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js',
        clean: true,
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            }, {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',

            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                /* generator: {
                    filename: 'images/[name][ext]'
                } */
            },
        ]
    },
    devServer: {
        static: ['./src', './public'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'legalide',
            template: path.resolve(__dirname, './src/legalide.html'),
            filename: 'legalide.html',
            chunks: ['legalide']
        }),
        new HtmlWebpackPlugin({
            title: 'welcome',
            template: path.resolve(__dirname, './src/welcome.html'),
            filename: 'welcome.html',
            chunks: ['welcome']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
        }),
    ],
}
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBar from 'webpackbar';
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';

export const loadHTMLPlugins = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: './static/template.html',
        }),
    ],
});

export const HOTReplacement = () => ({
    plugins: [new HotModuleReplacementPlugin(), new FriendlyErrorsPlugin()],
});

export const friendlyErrorPlugin = () => ({
    plugins: [new FriendlyErrorsPlugin()],
});

export const setENVPlugin = () => ({
    plugins: [
        new DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV),
            __PROD__: process.env.NODE_ENV === 'production',
            __DEV__: process.env.NODE_ENV === 'development',
            __STAGE__: process.env.NODE_ENV === 'stage',
        }),
    ],
});

export const loadingBarPlugin = () => ({
    plugins: [new WebpackBar()],
});

export const miniCssExtractPlugin = () => ({
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].[id].css',
            chunkFilename: 'css/[name].[contenthash].[id].css',
        }),
    ],
});

export const buildAnalyzer = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            openAnalyzer: false,
            generateStatsFile: true,
        }),
    ],
});

export const cleanFiles = () => ({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],
});

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import commonConfig from './webpack.common';
import merge from 'webpack-merge';

export default () =>
    merge(commonConfig(), {
        mode: 'production',
        devtool: false,
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin({
                verbose: true,
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[id].css',
                chunkFilename: 'css/[name].[id].css',
            }),
        ],
    });

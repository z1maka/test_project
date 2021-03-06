import merge from 'webpack-merge';
import commonConfig from './webpack.common';
import * as modules from '../modules';

export default () =>
    merge(
        commonConfig(),
        {
            mode: 'development',
            devtool: 'cheap-module-source-map',
            output: {
                filename: 'js/[hash].bundle.js',
                chunkFilename: 'js/[chunkhash].chunk.js',
            },
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
            entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
        },
        modules.HOTReplacement(),
        modules.friendlyErrorPlugin(),
        modules.loadStyles()
    );

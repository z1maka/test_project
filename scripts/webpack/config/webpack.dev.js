import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './webpack.common';

export default () =>
    merge(commonConfig(), {
        mode: 'development',
        devtool: 'cheap-module-source-map',
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom',
            },
        },
        entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
        plugins: [new HotModuleReplacementPlugin()],
    });

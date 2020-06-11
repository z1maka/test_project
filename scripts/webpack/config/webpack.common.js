import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';
import * as modules from '../modules';
import merge from 'webpack-merge';
import { DefinePlugin } from 'webpack';

export default () =>
    merge(
        {
            mode: 'none',
            entry: ['./src'],
            devtool: false,
            output: {
                filename: 'js/bundle.js',
                path: resolve(PROJECT_ROOT + '/dist'),
                publicPath: '/',
            },
            plugins: [
                new DefinePlugin({
                    __ENV__: JSON.stringify(process.env.NODE_ENV),
                    __PROD__: process.env.NODE_ENV === 'production',
                    __DEV__: process.env.NODE_ENV === 'development',
                    __STAGE__: process.env.NODE_ENV === 'stage',
                }),
            ],
        },
        modules.loadJavaScript(),
        modules.loadStyles(),
        modules.loadAssets(),
        modules.loadPlugins(),
        modules.optimization()
    );

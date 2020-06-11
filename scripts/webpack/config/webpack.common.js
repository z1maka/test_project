import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';
import * as modules from '../modules';
import merge from 'webpack-merge';

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
        },
        modules.setENVPlugin(),
        modules.loadingBarPlugin(),
        modules.loadJavaScript(),
        modules.loadStyles(),
        modules.loadAssets(),
        modules.loadHTMLPlugins(),
        modules.optimizationImages()
    );

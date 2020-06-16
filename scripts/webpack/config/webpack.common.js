import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';
import * as modules from '../modules';
import merge from 'webpack-merge';

export default () =>
    merge(
        {
            mode: 'none',
            entry: ['./source'],
            devtool: false,
            output: {
                path: resolve(PROJECT_ROOT + '/dist'),
                publicPath: '/',
                hashDigestLength: 7, // длина хеша , чтоб не устанавливать везде
            },
        },
        modules.setENVPlugin(),
        modules.loadingBarPlugin(),
        modules.loadJavaScript(),
        modules.loadAssets(),
        modules.loadHTMLPlugins(),
        modules.optimizationImages(),
        modules.filterMomentLocales()
    );

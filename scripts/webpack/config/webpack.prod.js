import commonConfig from './webpack.common';
import merge from 'webpack-merge';
import * as modules from '../modules';

export default () =>
    merge(
        commonConfig(),
        {
            mode: 'none',
            devtool: false,
        },
        modules.loadCssProd(),
        modules.miniCssExtractPlugin(),
        modules.buildAnalyzer(),
        modules.cleanFiles(),
        modules.optimizationBuild()
    );

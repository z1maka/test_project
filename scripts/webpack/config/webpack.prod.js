import commonConfig from './webpack.common';
import merge from 'webpack-merge';
import * as modules from '../modules';

export default () =>
    merge(
        commonConfig(),
        {
            mode: 'production',
            devtool: false,
            output: {
                filename: 'js/[chunkhash].bundle.js', // entry point bundle name
                chunkFilename: 'js/[chunkhash].chunk.js', // chunk name
            },
        },
        modules.loadCssProd(),
        modules.miniCssExtractPlugin(),
        modules.buildAnalyzer(),
        modules.cleanFiles(),
        modules.optimizationBuild()
    );

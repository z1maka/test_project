import ImageMinWebpack from 'imagemin-webpack';
import TerserPlugin from 'terser-webpack-plugin';

export const optimizationImages = () => ({
    plugins: [
        new ImageMinWebpack({
            bail: false,
            cache: true,
            imageminOptions: {
                plugins: [
                    ['mozjpeg', { progressive: true, quality: 60 }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                        'svgo',
                        {
                            plugins: [
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
    ],
});

export const optimizationBuild = () => ({
    optimization: {
        nodeEnv: 'production',

        // дефолтные настройки для мода production
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            // опции для минификации
            // terserOptions: {
            //
            // }
        ],
    },
});

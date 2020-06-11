import ImageMinWebpack from 'imagemin-webpack';

export const optimization = () => ({
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

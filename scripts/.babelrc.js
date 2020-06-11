module.exports = (api) => {
    const env = api.env();
    api.cache.using(() => env === 'development');

    const plugins = ['dynamic-import-node'];
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage',
                    debug: false,
                    shippedProposals: true,
                    spec: true, // Делает код более медленным но более надежным
                    loose: false, // Делает код более быстрым но отходит от стандарта
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
        plugins,
    };
};

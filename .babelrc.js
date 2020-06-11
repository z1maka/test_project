module.exports = (api) => {
    const env = api.env();
    // api.cache.using(() => env === 'development');
    api.cache.never();
    const plugins = ['@babel/plugin-proposal-class-properties'];
    if (env === 'development') {
        plugins.push('react-hot-loader/babel');
    }
    return {
        presets: [
            '@babel/preset-react',
            [
                '@babel/preset-env',
                {
                    debug: false,
                    spec: true, // Делает код более медленным но более надежным
                    loose: false, // Делает код более быстрым но отходит от стандарта
                    modules: false, // Webpack работает хорошо только с  ES2015
                },
            ],
        ],
        plugins,
    };
};

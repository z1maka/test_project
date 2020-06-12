module.exports = (api) => {
    const env = api.env();
    // api.cache.using(() => env === 'development');
    api.cache.never();
    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
    ];
    if (env === 'development') {
        // Этот плагин не обязательный для релодинга React-клмпонентов
        // обязательным являеться hot из 'react-hot-loader/hot'
        // но без него хое-релодинг может давать сбои
        plugins.push('react-hot-loader/babel');
    }
    return {
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    debug: false,
                    spec: true, // Делает код более медленным но более надежным
                    loose: false, // Делает код более быстрым но отходит от стандарта
                    modules: false, // Webpack работает хорошо только с  ES2015
                    useBuiltIns: 'usage', // Позволяет импортировать @babel/polyfill не все пакетом
                },
            ],
        ],
        plugins,
    };
};

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
        // dependency graph - компиляция
        // module graph - output
        // chunk graph - output
        // ✔ дефолтные настройки для мода production при выборе мода production
        minimize: false,
        minimizer: [
            new TerserPlugin(),
            // опции для минификации
            // terserOptions: {
            //
            // }
        ],
        // ✔ останавливает сборку при возникновении ошибки
        noEmitOnErrors: true,
        // ✔ не добавляет в сборку пустые чанки это уменьшает нагрузку на систему
        removeEmptyChunks: true,
        // ✔ обьединяет еквивалентные чанки
        mergeDuplicateChunks: true,
        // ✔ удалить с вызодом webpack 5 работает только в продакшене, находить
        // самые часто используемые модули и дает им наименьшие идентификаторы
        // часто используемые модули будут загруженны быстрее и это помогает компрессировать лучше сборку
        occurrenceOrder: true,
        // анализирует module graph т пытаеться найти модули которые модно смерджить
        // TODO эта настройка зависит от provideExports и usedExports.
        concatenateModules: true,
        // ✔ определяет экспортированные сущности для каждого модуля
        // это нужно для остальных оптимизаций webpack
        providedExports: true,
        // ✔ определяет использованные экспортированные сущности для каждого модуля
        // это нужно для остальных оптимизаций webpack
        // эта настройка зависит от providedExports
        usedExports: true,
        // ✔ собирает зависимости более эффективно
        // эта настройка зависит от providedExports и usedExports
        sideEffects: true, // TODO: (TREE SHAKING) посмотреть

        // development: вместо числовых модулей дает модулям понятные имена
        // TODO webpack5 remove nameModules, it will called moduleIds
        // TODO webpack5 add 'moduleIds': 'named' default for development
        // TODO webpack5 add 'moduleIds': 'size' default for production
        namedModules: false,
        // определяет механизм генерирования идентификатора для модуля
        moduleIds: false,
        // development: вместо числовых модулей дает модулям понятные имена
        // TODO webpack5 remove namedChunks, it will called moduleIds
        // TODO webpack5 add 'chunkIds': 'named' default for development
        // TODO webpack5 add 'chunkIds': 'size' default for production
        namedChunks: true,
        // определяет механизм генерирования идентификатора для модуля
        // chunkIds в false перебивате значение namedChunks
        // chunkIds: false,
    },
});

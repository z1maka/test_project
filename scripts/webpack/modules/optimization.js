import ImageMinWebpack from 'imagemin-webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { ContextReplacementPlugin } from 'webpack';

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

export const filterMomentLocales = () => ({
    plugins: [
        // принимает легулярное выражение пути и показывает какое значение отфильровать по пути
        // moment/locale/en
        // moment/locale/uk
        // moment/locale/ru
        // забиракм только английскую локаль
        new ContextReplacementPlugin(/moment\/locale$/, /(en|ru)/),
    ],
});

export const optimizationBuild = () => ({
    optimization: {
        nodeEnv: 'production',
        // dependency graph - компиляция
        // module graph - output
        // chunk graph - output
        // ✔ дефолтные настройки для мода production при выборе мода production
        minimize: true,
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
        // TODO SideEffects должен быть false в package.json во всех модулях для которых мы хотим сделать TREE SHAKING
        // TODO в руте проекта SideEffects не указываеться!
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
        namedChunks: false,
        // определяет механизм генерирования идентификатора для модуля
        // chunkIds в false перебивате значение namedChunks
        chunkIds: false,

        //initial chunk (vendors - react, react-dom)
        //async chunk (on demand)
        splitChunks: {
            // Режим разделения кода. по умалчанию - async
            chunks: 'all', // initial (внесение чанков в vendors) , all (async + initial), async (по требованию)
            // Минимальный размер нового чанка для отделения от кода
            minSize: 30000, // bytes
            maxSize: 0, // default 0
            // Минимальное количество чанков , которые зависят от модуля
            // перед определением этого модуля в отдельный чанк
            minChunks: 1, // default 1
            // Максимальное количество одновременно паралельных запроссов для асинхронного спитинга
            // Всегда предпочитаються чанки большого размера
            maxAsyncRequests: 5,
            // Максимальное количество одновременно паралельных запроссов чанков на один entrypoint.
            // Всегда предпочитаються чанки большого размера
            maxInitialRequests: 3,
            // Символ-разделитель имени сплит-чанка (напр. vendors~main.js)
            automaticNameDelimiter: '~', // default ~
            // Определяет имя нового чанка
            name: true, // true - чанк берет дефолтное имя , модно передать функцию и т.д.
            cacheGroups: {
                // Дефолтная кеш-група выносит все зависимости с node_modules в vendors
                vendors: {
                    // Выбирает модули, внесенные в данную кеш-группу.Если не указать будут выбранны все модули
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    // Дефолтная кеш-группа. Выносит любой модуль-зависимость в отдельный чанк default
                    // при условии дублирования модулуя хотя-бы в двух чанках
                    minChunks: 2,
                    // Приоритет кеш-группы. Если модуль попадает сразу в несколько кеш-групп,
                    // то выбираеться кеш-группа с более высоким приоритетом или которая составляет чанк большего размера
                    // уУ дефолтных кеш-групп отрицательный приоритет
                    // Поэтому кастомные кеш-группы приоритетнее (из priority 0 по дефолту)
                    priority: -20,
                    // Если чанк содержит уже существующий отдельный чанк
                    // то используеться этот уже существующий отдельный чанк вместо создания нового
                    reuseExistingChunk: true,
                },
            },
        },
        // Выносит webpack runtime каждого entrypoint в отдельный чанк. false по умолчанию
        runtimeChunk: true,
    },
});

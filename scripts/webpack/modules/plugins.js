import HtmlWebpackPlugin from 'html-webpack-plugin';

export const loadPlugins = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: './static/template.html',
        }),
    ],
});

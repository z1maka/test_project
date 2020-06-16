import webpack from 'webpack';
import chalk from 'chalk';
import DevServer from 'webpack-dev-server';
import hotMiddleware from 'webpack-hot-middleware';
import getDevConfig from './config/webpack.dev';
import { choosePort } from './utils';
import openBrowser from 'react-dev-utils/openBrowser';

const HOST = 'localhost';
const PORT = 3000;
const compiler = webpack(getDevConfig());

// TODO HOT reloading
// 1.Настроить на сервере
// 2.Настроить на клиенте(добавит в source ссылку 'webpack-hot-middleware/client?reload=true&quiet=true' и плагин HotModuleReplacementPlugin)
// 4.Настроить в корневом компоненте module.hot

(async () => {
    try {
        const chosenPort = await choosePort(PORT);
        if (!chosenPort) {
            return console.log(
                chalk.yellowBright("It's impossible to run the Components :(")
            );
        }
        const server = new DevServer(compiler, {
            host: HOST,
            port: chosenPort,
            historyApiFallback: true,
            overlay: true,
            quiet: true,
            clientLogLevel: 'none',
            noInfo: true,
            after: (app) => {
                app.use(
                    hotMiddleware(compiler, {
                        log: false,
                    })
                );
            },
        });

        server.listen(chosenPort, HOST, () => {
            console.log(
                `${chalk.greenBright('Server listening on')} ${chalk.blueBright(
                    `http://${HOST}:${chosenPort}`
                )}`
            );
            openBrowser(`http://${HOST}:${chosenPort}`);
        });
    } catch (e) {
        console.log(chalk.redBright('[ERROR!]'));
        console.log(e.message || e);
    }
})();

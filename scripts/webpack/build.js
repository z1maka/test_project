import webpack from 'webpack';
import chalk from 'chalk';
import getProdConfig from './config/webpack.prod';

const compiler = webpack(getProdConfig());
// compiler.hooks.beforeRun.tap('start', ()=>{
//     console.log('compilation started!!')
// })
compiler.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return null;
    }
    const info = stats.toString({
        hash: true,
        modules: false,
        version: true,
        colors: true,
        entrypoints: false,
    });
    console.log(chalk.greenBright('=====[Build completed]====='));
    console.log(info);
    if (stats.hasErrors()) {
        console.log(chalk.redBright('=====[Error!]====='));
        console.log(info);
    }

    if (stats.hasWarnings()) {
        console.log(chalk.yellowBright('=====[Warning!]====='));
        console.log(info);
    }
});

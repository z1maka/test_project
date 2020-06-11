import chalk from 'chalk';
import detectPort from 'detect-port-alt';
import inquirer from 'inquirer';

exports.choosePort = async (defaultPort) => {
    try {
        const port = await detectPort(defaultPort);
        if (port === defaultPort) {
            return port;
        }
        const message = `Port ${defaultPort} is already in use.`;
        if (process.stdout.isTTY) {
            const questionsName = 'changePort';
            const question = {
                type: 'confirm',
                name: questionsName,
                message: chalk.yellowBright(
                    `${message} Do you want to run another port?`
                ),
                default: true,
            };
            const result = await inquirer.prompt(question);
            return result[questionsName] ? port : null;
        }
        console.log(chalk.redBright(`-> ${message}`));
    } catch (e) {
        console.log(chalk.redBright('->  Error'));
        console.log(e.message || e);
    }
    return null;
};

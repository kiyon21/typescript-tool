import chalk from "chalk";

export function start(config){
    console.log(chalk.bgCyanBright(' Starting the App '));
    console.log(chalk.gray('Recieved configuration in start -'), config);
}
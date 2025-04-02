import chalk from 'chalk';
import { pkgUp } from 'pkg-up';
import { readFile } from 'fs/promises';

export async function getConfig(){
    // find closest package module with pkgUp
    const pkg_path = await pkgUp({cwd: process.cwd()});
    // read file
    const pkg_raw = await readFile(pkg_path, 'utf-8');
    const pkg = JSON.parse(pkg_raw);
    // check for tool config
    if(pkg.tool){
        console.log('Found Port Configuaration', pkg.tool);
        return pkg.tool;
    } else {
        // default config
        console.log(chalk.yellow('Could not find config, using default'));
        return {port: 1234}
    }
}
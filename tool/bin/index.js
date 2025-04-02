#! /usr/bin/env node
import { readFile } from 'fs/promises';
import arg from 'arg';
import chalk from 'chalk';
import path from 'path';
import {pkgUp} from 'pkg-up';
import {start} from '../src/commands/start.js';
import {getConfig} from '../src/config/config-mgr.js';


try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    });

    if (args['--start']) {
        const config = getConfig();
        await sleep(200);
        start(config);
    }
    if (args['--build']) {
        console.log(chalk.yellow("Building the App"));
    }
} catch (e) {
    console.log(e.message);
    usage();
}

function usage() {
    console.log(chalk.yellow('tool [CMD]\n'));
    console.log(chalk.green('--start') + '\tStarts the app');
    console.log(chalk.green('--build') + '\tBuilds the app');
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
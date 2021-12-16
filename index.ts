import { cpus } from 'os';
import chalk from "chalk"; // Import ES6 style

let cpusData = JSON.stringify(cpus());
console.log(chalk.blue(cpusData));

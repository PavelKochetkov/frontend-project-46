/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename, folder) => path.resolve(__dirname, '../..', folder, filename);

const setCollor = (value) => {
  let color;
  if (typeof value === 'boolean') {
    color = chalk.blue(value);
  }

  if (typeof value === 'string') {
    color = chalk.red(`'${value}'`);
  }

  if (typeof value === 'object') {
    color = chalk.yellow(value);
  }

  return color;
};

export { getFixturePath, setCollor };

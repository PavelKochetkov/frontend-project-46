#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('--format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    const result = genDiff(filePath1, filePath2);
    console.log(result);
  })
  .parse(process.argv);

program.on('-h', () => {
  console.log(`
      Usage: gendiff [options] <filepath1> <filepath2>
    
      Compares two configuration files and shows a difference.
    
      Options:
        -v, --version        output the version number
        -f, --format [type]  output format
        -h, --help           output usage information
    `);
});

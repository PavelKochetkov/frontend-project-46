#!/usr/bin/env node
import { program } from 'commander';

if (program.help) {
  console.log(`
    Usage: gendiff [options]

    Compares two configuration files and shows a difference.

    Options:
      -V, --version        output the version number
      -h, --help           output usage information
  `);
}

program
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .parse(process.argv);

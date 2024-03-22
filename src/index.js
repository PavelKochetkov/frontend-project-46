#!/usr/bin/env node
import readAndParseFile from './util/parsers.js';

const genDiff = (filePath1, filePath2) => {
  const data1 = readAndParseFile(filePath1);
  const data2 = readAndParseFile(filePath2);

  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)])).sort();
  const diff = keys.map((key) => {
    if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    }
    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    }
    if (data1[key] === data2[key]) {
      return `  ${key}: ${data1[key]}`;
    }

    return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
  });

  return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;

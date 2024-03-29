#!/usr/bin/env node
import _ from 'lodash';
import readAndParseFile from './util/parsers.js';
import { getFixturePath } from './util/utilites.js';

const genDiff = (fileName1, fileName2) => {
  const path1 = getFixturePath(fileName1, 'public');
  const path2 = getFixturePath(fileName2, 'public');
  const data1 = readAndParseFile(path1);
  const data2 = readAndParseFile(path2);

  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)])).sort();
  const diff = keys.map((key) => {
    if (!_.has(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
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

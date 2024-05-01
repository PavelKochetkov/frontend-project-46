#!/usr/bin/env node
import path from 'path';
import _ from 'lodash';
import readAndParseFile from './parsers.js';
import getFormat from './formaters/index.js';

const getPathFile = (fileName, directory = '__test__/__fixtures__') => path.resolve(directory, fileName);

const buildTree = (data1, data2) => {
  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)]));
  const sortedKeys = _.sortBy(keys);
  const tree = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: buildTree(data1[key], data2[key]) };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { key, type: 'unchanged', value: data1[key] };
    }

    return {
      key,
      type: 'changed',
      value1: data1[key],
      value2: data2[key],
    };
  });

  return tree;
};

const genDiff = (fileName1, fileName2, formatType) => {
  const path1 = getPathFile(fileName1);
  const path2 = getPathFile(fileName2);
  const data1 = readAndParseFile(path1);
  const data2 = readAndParseFile(path2);

  const diff = buildTree(data1, data2);

  return getFormat(diff, formatType);
};

export default genDiff;

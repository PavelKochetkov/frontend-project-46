#!/usr/bin/env node
import _ from 'lodash';
import readAndParseFile from './util/parsers.js';
import { getFixturePath } from './util/utilites.js';
import formatStylish from './formaters/stylish.js';

const buildTree = (data1, data2) => {
  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)])).sort();
  const tree = keys.map((key) => {
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

const genDiff = (fileName1, fileName2) => {
  const path1 = getFixturePath(fileName1, '__test__/__fixtures__');
  const path2 = getFixturePath(fileName2, '__test__/__fixtures__');
  const data1 = readAndParseFile(path1);
  const data2 = readAndParseFile(path2);

  const diff = buildTree(data1, data2);

  return formatStylish(diff);
};

export default genDiff;

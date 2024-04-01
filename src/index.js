#!/usr/bin/env node
import _ from 'lodash';
import readAndParseFile from './util/parsers.js';
import { getFixturePath } from './util/utilites.js';

const buildTree = (data1, data2) => {
  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)])).sort();
  const tree = keys.map((key) => {
    if (_.has(data1, key)) {
      return { key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, children: buildTree(data1[key], data2[key]) };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { key, value: data1[key] };
    }

    return { key, oldValue: data1[key], newValue: data2[key] };
  });

  return tree;
};

const genDiff = (fileName1, fileName2) => {
  const path1 = getFixturePath(fileName1, 'public');
  const path2 = getFixturePath(fileName2, 'public');
  const data1 = readAndParseFile(path1);
  const data2 = readAndParseFile(path2);

  return buildTree(data1, data2);
};

export default genDiff;

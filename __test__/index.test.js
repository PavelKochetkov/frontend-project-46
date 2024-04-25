import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';
import { getFixturePath } from '../src/util/utilites.js';

const stylish = readFileSync(getFixturePath('stylish.txt', '__test__/__fixtures__'), 'utf8', 'r');
const plain = readFileSync(getFixturePath('plain.txt', '__test__/__fixtures__'), 'utf8', 'r');
const json = readFileSync(getFixturePath('json.txt', '__test__/__fixtures__'), 'utf8', 'r');

const output = { stylish, plain, json };

test('should generate sorted difference between two objects in stylish format', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.json', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2, 'stylish');
  expect(result).toEqual(output.stylish);
});

test('should generate sorted difference between two objects in plain format', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.json', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2, 'plain');
  expect(result).toEqual(output.plain);
});

test('should generate sorted difference between two objects in json format', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.json', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2, 'json');
  expect(result).toEqual(output.json);
});

test('should return a string', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.yml', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2);
  expect(typeof result).toEqual('string');
});

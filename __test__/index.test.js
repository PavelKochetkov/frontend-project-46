import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(`${__dirname}/__fixtures__/`, filename);

const expectedStylish = readFileSync(getFixturePath('stylish.txt'), 'utf8');
const expectedPlain = readFileSync(getFixturePath('plain.txt'), 'utf8');
const expectedJson = readFileSync(getFixturePath('json.txt'), 'utf8');

test('should work with json', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');

  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
  expect(genDiff(filePath1, filePath2)).toEqual(expectedStylish);
});

test('should work with yaml', () => {
  const filePath1 = getFixturePath('file1.yml');
  const filePath2 = getFixturePath('file2.yml');

  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
  expect(genDiff(filePath1, filePath2)).toEqual(expectedStylish);
});

/* eslint-disable no-undef */
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (fileName) => path.join(`${__dirname}/__fixtures__`, fileName);

test('should generate sorted difference between two objects', () => {
  const filePath1 = getFixturePath('dataAny1.json');
  const filePath2 = getFixturePath('dataAny2.json');

  const expectedDiff = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

  const result = genDiff(filePath1, filePath2);
  expect(result).toEqual(expectedDiff);
});

test('should return a sorted object for the same data', () => {
  const filePath1 = getFixturePath('dataAny1.json');
  const filePath2 = getFixturePath('dataEqual.json');

  const expectedDiff = `{
  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  timeout: 50
}`;

  const result = genDiff(filePath1, filePath2);
  expect(result).toEqual(expectedDiff);
});

test('should return a string', () => {
  const filePath1 = getFixturePath('dataAny1.json');
  const filePath2 = getFixturePath('dataAny2.json');

  const result = genDiff(filePath1, filePath2);
  expect(typeof result).toBe('string');
});

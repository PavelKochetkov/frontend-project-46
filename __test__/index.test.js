/* eslint-disable no-undef */

import genDiff from '../src/index.js';
import { getFixturePath } from '../src/util/utilites.js';

test('should generate sorted difference between two objects', () => {
  const filePath1 = getFixturePath('data1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('data2.json', '__test__/__fixtures__');

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
  const filePath1 = getFixturePath('data1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('data1.json', '__test__/__fixtures__');

  const expectedDiff = `{
  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  timeout: 50
}`;

  const result = genDiff(filePath1, filePath2);
  expect(result).toEqual(expectedDiff);
});

test('should generate sorted difference between two objects of different structure', () => {
  const filePath1 = getFixturePath('data1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('data2.yml', '__test__/__fixtures__');

  const expectedDiff = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20,
+ verbose: true,
}`;

  const result = genDiff(filePath1, filePath2);
  expect(result).toEqual(expectedDiff);
});

test('should return a string', () => {
  const filePath1 = getFixturePath('data1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('data2.json', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2);
  expect(typeof result).toBe('string');
});

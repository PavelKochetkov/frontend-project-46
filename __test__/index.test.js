/* eslint-disable no-undef */
import { expectedDiffStylish, expectedDiffPlain, expectedDiffJson } from './__fixtures__/expectedformat.js';
import genDiff from '../src/index.js';
import { getFixturePath } from '../src/util/utilites.js';

// test('should generate sorted difference between two objects in stylish format', () => {
//   const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
//   const filePath2 = getFixturePath('file2.json', '__test__/__fixtures__');

//   const result = genDiff(filePath1, filePath2, 'stylish');
//   expect(result).toEqual(expectedDiffStylish);
// });

test('should generate sorted difference between two objects in plain format', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.json', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2, 'plain');
  expect(result).toEqual(expectedDiffPlain);
});

test('should generate sorted difference between two objects in json format', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.json', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2, 'json');
  expect(result).toEqual(expectedDiffJson);
});

test('should generate sorted difference between two objects of different structure', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.yml', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2);
  expect(result).toEqual(expectedDiffStylish);
});

test('should return a string', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.yml', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2);
  expect(typeof result).toBe('string');
});

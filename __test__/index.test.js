/* eslint-disable no-undef */

import genDiff from '../src/index.js';
import { getFixturePath } from '../src/util/utilites.js';
// import getPath from '../src/util/utilites.js';

// const path = './__test__/__fixtures__';

test('should generate sorted difference between two objects', () => {
  const filePath1 = getFixturePath('dataAny1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('dataAny2.json', '__test__/__fixtures__');

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

// test('should return a sorted object for the same data', () => {
//   const filePath1 = getPath(path, 'dataAny1.json');
//   const filePath2 = getPath(path, 'dataEqual.json');

//   const expectedDiff = `{
//   follow: false
//   host: hexlet.io
//   proxy: 123.234.53.22
//   timeout: 50
// }`;

//   const result = genDiff(filePath1, filePath2);
//   expect(result).toEqual(expectedDiff);
// });

// test('should return a string', () => {
//   const filePath1 = getPath(path, 'dataAny1.json');
//   const filePath2 = getPath(path, 'dataAny1.json');

//   const result = genDiff(filePath1, filePath2);
//   expect(typeof result).toBe('string');
// });

/* eslint-disable no-undef */

import genDiff from '../src/index.js';
import { getFixturePath } from '../src/util/utilites.js';

const expectedDiff = `{
      common: {
        + follow: false
          setting1: Value 1
        - setting2: 200
        - setting3: true
        + setting3: null
        + setting4: blah blah
        + setting5: {
            key5: value5
        }
          setting6: {
              doge: {
                - wow: 
                + wow: so much
            }
              key: value
            + ops: vops
        }
    }
      group1: {
        - baz: bas
        + baz: bars
          foo: bar
        - nest: {
            key: value
        }
        + nest: str
    }
    - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
    + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

test('should generate sorted difference between two objects', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.json', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2);
  expect(result).toEqual(expectedDiff);
});

test('should generate sorted difference between two objects of different structure', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.yml', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2);
  expect(result).toEqual(expectedDiff);
});

test('should return a string', () => {
  const filePath1 = getFixturePath('file1.json', '__test__/__fixtures__');
  const filePath2 = getFixturePath('file2.yml', '__test__/__fixtures__');

  const result = genDiff(filePath1, filePath2);
  expect(typeof result).toBe('string');
});

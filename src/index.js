import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import format from './formaters/index.js';
import buildTree from './buildTree.js';

const getDataType = (filepath) => path.extname(filepath).slice(1);
const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(fullPath, 'utf8');

  return parse(data, getDataType(filepath));
};

const genDiff = (filepath1, filepath2, formatType) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);

  const difference = buildTree(data1, data2);

  return format(difference, formatType);
};

export default genDiff;

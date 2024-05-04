import path from 'path';
import fs from 'fs';
import parseFile from './parsers.js';
import format from './formaters/index.js';
import buildTree from './buildTree.js';

const getDataType = (fileName) => path.extname(fileName);
const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(fullPath, 'utf8');

  return data;
};

const genDiff = (fileName1, fileName2, formatType) => {
  const data1 = readFile(fileName1);
  const data2 = readFile(fileName2);

  const dataType1 = getDataType(fileName1);
  const dataType2 = getDataType(fileName2);

  const dataParsed1 = parseFile(data1, dataType1);
  const dataParsed2 = parseFile(data2, dataType2);

  const diff = buildTree(dataParsed1, dataParsed2);

  return format(diff, formatType);
};

export default genDiff;

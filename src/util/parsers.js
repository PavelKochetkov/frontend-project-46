import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
// import { getFixturePath } from './utilites.js';
// import getPath from './utilites.js';

const readAndParseFile = (filePath) => {
  // const folder = './public/';
  const extension = path.extname(filePath);
  // const filePath = getFixturePath(fileName, 'public');
  const data = fs.readFileSync(filePath, 'utf-8');
  let parse;

  if (extension === '.json') {
    parse = JSON.parse(data);
  } else if (extension === '.yml') {
    parse = yaml.load(data);
  }

  return parse;
};

export default readAndParseFile;

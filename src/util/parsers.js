import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const readAndParseFile = (filePath) => {
  const extension = path.extname(filePath);
  const data = fs.readFileSync(filePath, 'utf-8');

  const parse = (extension === 'json') ? JSON.parse(data) : yaml.load(data);

  return parse;
};

export default readAndParseFile;

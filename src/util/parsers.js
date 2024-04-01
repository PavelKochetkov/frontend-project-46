import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const readAndParseFile = (filePath) => {
  const extension = path.extname(filePath);
  const data = fs.readFileSync(filePath, 'utf-8');
  let parse;

  if (extension === '.json') {
    parse = JSON.parse(data);
  } else if (extension === '.yml' || extension === '.yaml') {
    parse = yaml.load(data);
  }

  return parse;
};

export default readAndParseFile;

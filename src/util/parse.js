import fs from 'fs';

const readAndParseFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export default readAndParseFile;

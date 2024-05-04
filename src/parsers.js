import yaml from 'js-yaml';

const readAndParseFile = (data, extension) => {
  const parse = (extension === 'json') ? JSON.parse(data) : yaml.load(data);

  return parse;
};

export default readAndParseFile;

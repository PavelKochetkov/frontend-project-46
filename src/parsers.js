import yaml from 'js-yaml';

const parseFile = (data, extension) => {
  const parse = (extension === 'json') ? JSON.parse(data) : yaml.load(data);

  return parse;
};

export default parseFile;

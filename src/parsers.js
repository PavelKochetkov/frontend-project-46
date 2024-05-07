import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (data, type) => {
  if (!parsers[type]) {
    throw new Error(`${type} format is not supported by the application`);
  }

  return parsers[type](data);
};

import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: JSON.stringify,
};

export default (difference, type = 'stylish') => {
  if (!formatters[type]) {
    throw new Error(`Unknown format type: ${type}`);
  }

  return formatters[type](difference);
};

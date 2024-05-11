import _ from 'lodash';

const symbols = {
  added: '+',
  removed: '-',
  unchanged: ' ',
  nested: ' ',
};

const signWidth = 2;
const getIdent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - signWidth);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }

  const lines = Object.entries(value).map(([key, val]) => `${getIdent(depth)}  ${key}: ${stringify(val, depth + 1)}`);

  return `{\n${lines.join('\n')}\n${getIdent(depth - 1)}  }`;
};

const iter = (item, depth) => {
  switch (item.type) {
    case 'added':
    case 'removed':
    case 'unchanged':
      return `${getIdent(depth)}${symbols[item.type]} ${item.key}: ${stringify(item.value, depth + 1)}`;
    case 'changed': {
      const addedLine = `${getIdent(depth)}${symbols.added} ${item.key}: ${stringify(item.value2, depth + 1)}`;
      const deletedLine = `${getIdent(depth)}${symbols.removed} ${item.key}: ${stringify(item.value1, depth + 1)}`;

      return `${deletedLine}\n${addedLine}`;
    }
    case 'nested': {
      const lines = item.children.map((child) => iter(child, depth + 1));
      return `${getIdent(depth)}${symbols[item.type]} ${item.key}: {\n${lines.join('\n')}\n  ${getIdent(depth)}}`;
    }
    default:
      throw new Error(`Unknown type: ${item.type}`);
  }
};

export default (difference) => `{\n${difference.map((element) => iter(element, 1)).join('\n')}\n}`;

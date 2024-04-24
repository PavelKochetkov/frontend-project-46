/* eslint-disable no-case-declarations */
import _ from 'lodash';

const ident = 4;
const getIdent = (depth, spaceCount = 2) => ' '.repeat(depth * ident - spaceCount);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }

  return `{\n${Object.entries(value).map(([key, val]) => `${getIdent(depth)}  ${key}: ${stringify(val, depth + 1)}`).join('\n')}\n${getIdent(depth - 1)}  }`;
};

const symbol = {
  added: '+',
  removed: '-',
  unchanged: ' ',
  nested: ' ',
};

const iter = (item, depth) => {
  switch (item.type) {
    case 'added':
    case 'removed':
    case 'unchanged':
      return `${getIdent(depth)}${symbol[item.type]} ${item.key}: ${stringify(item.value, depth + 1)}`;
    case 'changed':
      const add = `${getIdent(depth)}${symbol.added} ${item.key}: ${stringify(item.value2, depth + 1)}`;
      const del = `${getIdent(depth)}${symbol.removed} ${item.key}: ${stringify(item.value1, depth + 1)}`;

      return `${del}\n${add}`;
    case 'nested':
      return `${getIdent(depth)}${symbol[item.type]} ${item.key}: {\n${item.children.map((child) => iter(child, depth + 1)).join('\n')}\n ${getIdent(depth)}}`;
    default:
      throw new Error(`Unknown type: ${item.type}`);
  }
};

export default (astDiff) => `{\n${astDiff.map((elem) => iter(elem, 1)).join('\n')}\n}`;

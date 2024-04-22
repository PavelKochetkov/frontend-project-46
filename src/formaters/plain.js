import _ from 'lodash';
import { setCollor } from '../util/utilites.js';

const stringify = (value) => (_.isObject(value) || _.isArray(value) ? '[complex value]' : setCollor(value));

const formatPlain = (tree) => {
  const iter = (node, parentPath = '') => {
    const result = node.map((item) => {
      const parentKey = parentPath ? `${parentPath}.${item.key}` : item.key;
      switch (item.type) {
        case 'added':
          return `Property ${setCollor(parentKey)} was added with value: ${stringify(item.value)}`;
        case 'removed':
          return `Property ${setCollor(parentKey)} was removed`;
        case 'changed':
          return `Property ${setCollor(parentKey)} was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
        case 'nested':
          return `${iter(item.children, parentKey)}`;
        case 'unchanged':
          return '';
        default:
          throw new Error(`Unknown item type: ${item.type}`);
      }
    });
    return result.filter((el) => el !== '').join('\n');
  };
  return iter(tree);
};

export default formatPlain;

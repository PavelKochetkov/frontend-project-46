import _ from 'lodash';

const setQuotes = (value) => (!_.isString(value) ? value : `'${value}'`);
const stringify = (value) => (_.isObject(value) || _.isArray(value) ? '[complex value]' : setQuotes(value));

const iter = (item, parentPath = '') => {
  const parentKey = parentPath ? `${parentPath}.${item.key}` : item.key;
  switch (item.type) {
    case 'added':
      return `Property ${setQuotes(parentKey)} was added with value: ${stringify(item.value)}`;
    case 'removed':
      return `Property ${setQuotes(parentKey)} was removed`;
    case 'changed':
      return `Property ${setQuotes(parentKey)} was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
    case 'nested':
      return item.children.map((child) => iter(child, parentKey)).filter(Boolean).join('\n');
    case 'unchanged':
      return '';
    default:
      throw new Error(`Unknown item type: ${item.type}`);
  }
};

export default (difference) => `${difference.map((element) => iter(element)).filter(Boolean).join('\n')}`;

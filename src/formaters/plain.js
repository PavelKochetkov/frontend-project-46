import _ from 'lodash';

const setQuotes = (value) => (!_.isString(value) ? value : `'${value}'`);
const stringify = (value) => (_.isObject(value) || _.isArray(value) ? '[complex value]' : setQuotes(value));

const formatPlain = (tree) => {
  const iter = (node, parentPath = '') => {
    const result = node.map((item) => {
      const parentKey = parentPath ? `${parentPath}.${item.key}` : item.key;
      switch (item.type) {
        case 'added':
          return `Property ${setQuotes(parentKey)} was added with value: ${stringify(item.value)}`;
        case 'removed':
          return `Property ${setQuotes(parentKey)} was removed`;
        case 'changed':
          return `Property ${setQuotes(parentKey)} was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
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

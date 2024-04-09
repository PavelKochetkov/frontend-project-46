/* eslint-disable no-case-declarations */
const getIdent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);

const stringify = (value, replacer, space) => {
  if (typeof value === 'string') {
    return `${value}`;
  }
  if (typeof value === 'object' && value !== null) {
    return `{
      ${Object.entries(value).map(([key, val]) => `${getIdent(space - 1)}${key}: ${stringify(val, null, space)}`).join('\n')}
    }`;
  }

  return JSON.stringify(value, replacer, space);
};

const formatStylish = (tree) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      switch (item.type) {
        case 'added':
          return `${getIdent(depth)}+ ${item.key}: ${stringify(item.value, null, depth + 1)}`;
        case 'removed':
          return `${getIdent(depth)}- ${item.key}: ${stringify(item.value, null, depth + 1)}`;
        case 'changed':
          const add = `${getIdent(depth)}+ ${item.key}: ${stringify(item.value2, null, depth + 1)}`;
          const del = `${getIdent(depth)}- ${item.key}: ${stringify(item.value1, null, depth + 1)}`;

          return `${del}\n${add}`;
        case 'unchanged':
          return `${getIdent(depth)}  ${item.key}: ${stringify(item.value, null, depth + 1)}`;
        case 'nested':
          return `${getIdent(depth)}  ${item.key}: ${iter(item.children, depth + 1)}`;
        default:
          throw new Error(`Unknown type: ${item.type}`);
      }
    });
    return `{
      \n${result.join('\n')}\n
    }`;
  };
  return iter(tree, 1);
};

export default formatStylish;

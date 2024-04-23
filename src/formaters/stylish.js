/* eslint-disable no-case-declarations */
const getIdent = (depth, spaceCount = 2) => ' '.repeat(depth * spaceCount);

const stringify = (value, space) => {
  if (typeof value === 'object' && value !== null) {
    return `{\n${Object.entries(value).map(([key, val]) => `${getIdent(space)}${key}: ${stringify(val, space + 1)}`).join('\n')}\n${getIdent(space - 1)}}`;
  }

  return `${value}`;
};

const formatStylish = (tree) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      switch (item.type) {
        case 'added':
          return `${getIdent(depth)}+ ${item.key}: ${stringify(item.value, depth + 1)}`;
        case 'removed':
          return `${getIdent(depth)}- ${item.key}: ${stringify(item.value, depth + 1)}`;
        case 'changed':
          const add = `${getIdent(depth)}+ ${item.key}: ${stringify(item.value2, depth + 1)}`;
          const del = `${getIdent(depth)}- ${item.key}: ${stringify(item.value1, depth + 1)}`;

          return `${del}\n${add}`;
        case 'unchanged':
          return `${getIdent(depth)}  ${item.key}: ${stringify(item.value, depth + 1)}`;
        case 'nested':
          return `${getIdent(depth)}  ${item.key}: ${iter(item.children, depth + 1)}`;
        default:
          throw new Error(`Unknown type: ${item.type}`);
      }
    });
    return `{\n${result.join('\n')}\n${getIdent(depth - 1)}}`;
  };
  return iter(tree, 1);
};

export default formatStylish;

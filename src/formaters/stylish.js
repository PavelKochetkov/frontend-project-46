/* eslint-disable no-case-declarations */
const getIdent = (spaceCount) => ' '.repeat(spaceCount * 2);

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
          return `${getIdent(depth + 1)}+ ${item.key}: ${stringify(item.value, depth + 3)}`;
        case 'removed':
          return `${getIdent(depth + 1)}- ${item.key}: ${stringify(item.value, depth + 3)}`;
        case 'changed':
          const add = `${getIdent(depth + 1)}+ ${item.key}: ${stringify(item.value2, depth + 3)}`;
          const del = `${getIdent(depth + 1)}- ${item.key}: ${stringify(item.value1, depth + 3)}`;

          return `${del}\n${add}`;
        case 'unchanged':
          return `${getIdent(depth + 1)}  ${item.key}: ${stringify(item.value, depth + 3)}`;
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

const numberOfIndents = 4;
const leftShift = 4;

const stringify = (value, replacer, space) => JSON.stringify(value, replacer, space);

const formatStylish = (tree) => {
  const iter = (node, depth) => {
    const indentation = ''.repeat(depth * numberOfIndents - leftShift);
    const result = node.map((item) => {
      switch (item.type) {
        case 'added':
          return `      ${indentation} + ${item.key}: ${stringify(item.value, null, '\t'.repeat(depth))}`;
        case 'removed':
          return `      ${indentation} - ${item.key}: ${stringify(item.value, null, '\t'.repeat(depth))}`;
        case 'changed':
          return `      ${indentation} - ${item.key}: ${stringify(item.value1, null, '\t'.repeat(depth))}`
          + `\n      ${indentation} + ${item.key}: ${stringify(item.value2, null, '\t'.repeat(depth))}`;
        case 'unchanged':
          return `      ${indentation}   ${item.key}: ${stringify(item.value, null, '\t'.repeat(depth))}`;
        case 'nested':
          return `    ${indentation}${item.key}: ${iter(item.children, depth + 1)}`;
        default:
          throw new Error(`Unknown type: ${item.type}`);
      }
    });
    return `${indentation}{\n${result.join('\n')}\n}`;
  };
  return iter(tree, 1);
};

export default formatStylish;

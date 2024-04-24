/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename, folder) => path.resolve(__dirname, '../..', folder, filename);

const setQuotes = (value) => {
  let quotes;
  if (!_.isString(value)) {
    quotes = value;
  } else {
    quotes = `'${value}'`;
  }

  return quotes;
};

export { getFixturePath, setQuotes };

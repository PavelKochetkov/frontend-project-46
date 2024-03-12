import fs from 'fs';
import { baseURL } from '../config.js';

const readAndParseFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

export default readAndParseFile;

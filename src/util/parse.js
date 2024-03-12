import fs from 'fs';
import { baseURL } from '../config.js';

const readAndParseFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

const filePath1 = `${baseURL}file1.json`;
const filePath2 = `${baseURL}file2.json`;

const data1 = readAndParseFile(filePath1);
const data2 = readAndParseFile(filePath2);

if (data1 && data2) {
    console.log('Data from file1.json: ', data1);
    console.log('Data from file1.json: ', data2);
} else {
    console.log('Error reading and parsing files');
}

export default readAndParseFile;
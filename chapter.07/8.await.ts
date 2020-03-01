import * as fs from 'fs'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)

async function getData(filename: string) {
  try {
    return await readFile(filename, {encoding: 'utf-8'})
  } catch(e) {
    throw new Error(e.toString());
  }
}

async function song() {
  try {
    const data = await getData('data.txt');
    console.log(data);
  } catch(e) {
    console.log(e);
  }
}

console.log('1.start');
song();
console.log('2.end');
import * as fs from 'fs'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile);

async function getData(filename: string) {
  try {
    return await readFile(filename, {encoding: 'utf-8'})
  } catch(e) {
    throw new Error(e.toString());
  }
}


async function song() {
  try {
    const data: string = await getData('data.txt');
    const data2: string = await getData('data2.txt');
    const out: string = data + data2;
    console.log(out)
    await writeFile('out.txt', out)
  } catch (e) {
    console.log(e)
  }
}

console.log('1.start');
song();
console.log('2.end');
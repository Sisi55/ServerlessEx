import * as fs from 'fs'
import { promisify } from 'util'

console.log('1. start')

const readFile = promisify(fs.readFile)
readFile('data.txt', {encoding: 'utf-8'}).then((data: string) => {
  console.log(data);
}).catch((e: any) => {
  console.log(e.toString())
})

console.log('2. end')

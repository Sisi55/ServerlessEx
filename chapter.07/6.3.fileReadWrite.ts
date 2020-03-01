import * as fs from 'fs'

console.log('1. start')
fs.readFile('data.txt', { encoding: 'utf-8' }, (error: NodeJS.ErrnoException, data: string) => {
  fs.readFile('data2.txt', { encoding: 'utf-8' }, (error: NodeJS.ErrnoException, data2: string) => {
    const outdata = data + data2;
    fs.writeFile('out.txt', outdata, (error: NodeJS.ErrnoException) => {
      console.log(outdata);
    })
  })
})
console.log('2. end')
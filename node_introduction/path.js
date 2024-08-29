const path = require('path')
const url = require('url')

const myPath = 'd:/Harvest/node/code/hello.txt'

// console.log('dir  ', path.dirname(myPath))
// console.log('base ', path.basename(myPath))
// console.log('ext ', path.extname(myPath))

// console.log('parse ', path.parse(myPath))

// console.log(url)
console.log(__dirname)
console.log(__filename)

console.log('parse ', path.parse(__filename))

// Es modules
// const __sssfilename = url.fileURLToPath(import.meta.url)

const datapath = path.join(__dirname, 'data', 'users.txt')

console.log(datapath)
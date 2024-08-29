const url = require('url')


const myLink = "http://localhost:3000/api?name=John&age=30"

const linkObj = new URL(myLink)

console.log(linkObj)
// console.log(url.parse(myLink, true))
console.log(url.format(linkObj))
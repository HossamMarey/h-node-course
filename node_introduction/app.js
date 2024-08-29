// ES modules
// import fs from 'fs'
// // export const x = 1 
// // export default s = 2
// import {x} from 'ssss'
// import s from 'ssss'


// common js
// const fs = require('fs')
// const x = 1;
// module.exports.x = 2
// module.exports = x

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  // res.setHeader('Content-Type', 'text/html')
  // res.write('<html>')
  // res.write('<head><title>My First Page</title></head>')
  // res.write('<body><h1>Hello World</h1></body>')
  // res.write('</html>')
  // res.end()

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joes' }
  ]

  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify(users))

  if (req.url === '/') {
    res.end('Home Page')
  } else if (req.url === '/about') {
    res.end('About Page')
  } else if (req.url === '/api/users', req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(users))
  } else if (req.url === '/api/users', req.method === 'POST') {
    res.setHeader('Content-Type', 'application/json')
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
      if (!err) {
        res.end(JSON.stringify({ message: 'user added successfully' }))
      } else {
        res.status(500)
        res.end(JSON.stringify({ message: 'server error' }))
        ///
      }
      /// 
    })

  }

  // process.exit()
})

server.listen(5000)
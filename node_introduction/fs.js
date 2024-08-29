// const fs = require('fs')
const fs = require('fs/promises')

// fs.readFile('users.json', 'utf8', (err, data) => {
//   console.log('DATA', data)
// })

const readData = async () => {
  const data = await fs.readFile('users.json', 'utf8')
  console.log(data)
}

const writeData = async () => {
  await fs.writeFile('users.txt', 'Hello World')
}

const appendData = async () => {
  await fs.appendFile('users.txt', '\n extra ')
}

readData()
writeData()
appendData()
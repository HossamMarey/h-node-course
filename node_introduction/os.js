const os = require('os')

console.log(os.userInfo())

console.log(os.totalmem() / 1024 / 1024 / 1024)
console.log(os.freemem() / 1024 / 1024 / 1024)
console.log(os.cpus())

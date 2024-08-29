const { EventEmitter } = require('events')


const myEmmiter = new EventEmitter()


myEmmiter.on('hello', (name) => {
  console.log('hello world', name)
})

myEmmiter.emit('hello', 'John')
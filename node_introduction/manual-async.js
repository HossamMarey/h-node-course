console.log('ddddddddd')

setTimeout(() => {
  console.log('2000')
}, 2000)

setTimeout(() => {
  console.log('0')
}, 0)

console.log('hello world')

const getPostsAsync = (callback) => {
  setTimeout(() => {
    callback('done')
  }, 2000)
}

getPostsAsync((txt) => {
  console.log(txt)
})

console.log('start')
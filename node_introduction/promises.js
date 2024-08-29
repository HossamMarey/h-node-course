
const getPostsAsync = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(('done'))
      reject(('err'))
    }, 2000)
  })

  return promise
}
// then catch finally
// getPostsAsync().then((txt) => {
//   console.log('DATA', txt)
//   return getPostsAsync()
// }).then((txt) => {
//   console.log('DATA 2', txt)
// }).catch(err => {
//   console.log('ERR', err)
// }).finally(() => {
//   /// do something
// })

const getData = async () => {
  try {
    console.log('ASYNC 1 ',)
    const txt = await getPostsAsync()
    console.log('ASYNC 2', txt)

    console.log('ASYNC 3',)
  } catch (error) {
    console.log('ASYNC ERROR', error)
  }
}

getData()


// getPostsAsync((txt) => {
//   console.log(txt)
// })

console.log('start')
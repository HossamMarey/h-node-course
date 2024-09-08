const mongoose = require('mongoose');

const initDB = async () => {
  try {

    // remove '-example' to be .env adn add db uri to it 
    const MONGO_URI = process.env.MONGO_URI

    // const MONGO_URI = 'mongodb://localhost:27017/store';
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    })
    // if (mongoose.connection.readyState === 1) {
    // }
    console.log('Mongodb connected')
  } catch (error) {
    console.log('Mongodb error', error)
  }
}

module.exports = initDB

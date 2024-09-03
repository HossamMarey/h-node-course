const mongoose = require('mongoose');

const initDB = async () => {
  try {

    const MONGO_URI = "mongodb+srv://admin:<Password>@storecluster.gbghg.mongodb.net/store?retryWrites=true&w=majority"
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

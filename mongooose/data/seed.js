
const data = require('./movies.json')
const initDB = require('../db')
const Movie = require('../models/movie')
const dotenv = require('dotenv')


const seedData = async () => {
  dotenv.config()

  try {
    await initDB()
    // start seeding

    await Movie.insertMany(data)

    console.log('SEED SUCCESS')
  } catch (error) {

    console.log('SEED ERROR', error)
  }
}

seedData()
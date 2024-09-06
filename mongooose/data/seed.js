
const data = require('./movies.json')
const initDB = require('../db')
const Movie = require('../models/movie')
const seedData = async () => {

  try {
    await initDB()
    // start seeding

    console.log('SEED SUCCESS')
  } catch (error) {

    console.log('SEED ERROR', error)
  }
}

seedData()
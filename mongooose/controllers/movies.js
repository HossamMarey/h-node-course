const Movie = require("../models/movie");


module.exports.addMovie = async (req, res) => {
  // CREATE NEW MOVIE

  res.status(201).send(newMovie);
}

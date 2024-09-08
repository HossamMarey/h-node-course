const Movie = require("../models/movie");


module.exports.addMovie = async (req, res) => {
  // CREATE NEW MOVIE

  res.status(201).send(newMovie);
}

module.exports.getMovies = async (req, res) => {

  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10
  const genreQ = req.query.genre || ''
  const sortQ = req.query.sort || '-createdAt'


  const minYear = parseInt(req.query.minYear) || 0
  const maxYear = parseInt(req.query.maxYear) || 0


  const filters = {
    // genre: { $in: genreArr },
    // year: { $gte: req.query.minYear, $lte: req.query.maxYear }
  }

  if (genreQ) {
    const genreArr = genreQ.split(',') || []
    if (genreArr.length) filters.genre = { $in: genreArr }
  }

  if (minYear || maxYear) {
    const yearFilter = {}
    if (minYear) yearFilter.$gte = minYear
    if (maxYear) yearFilter.$lte = maxYear
    filters.year = yearFilter
  }

  const sort = {}


  if (sortQ) {
    let sortVal = 1
    let sortBy = sortQ
    if (sortQ.startsWith('-')) {
      sortVal = -1
      sortBy = sortQ.substring(1)
    }
    sort[sortBy] = sortVal
  }


  const movies = await Movie.find(filters).sort(sort).skip((page - 1) * limit).limit(limit)
  const total = await Movie.countDocuments(filters)
  // const movies = await Movie.find({ title: new RegExp(req.query.title, 'i') });
  res.send({
    data: movies,
    pagination: {
      current: page,
      pages: Math.ceil(total / limit),
      total,
      limit
    },

  });
}

module.exports.updateMovie = async (req, res) => {
  try {

    const movie = await Movie.findOne({ _id: '66db342d24d5840ab0ab32da' });

    // movie.year = 2024;
    // await movie.save()
    await movie.deleteOne()
    // const movie = await Movie.findByIdAndUpdate('66db342d24d5840ab0ab32da', { year: 3030 });
    res.send(movie);
  } catch (error) {
    res.status(500).send(error)
  }
}



module.exports.uploadImage = async (req, res) => {


  res.send({
    file: req.file
  })
}
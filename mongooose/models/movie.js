const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  // MOVIE SCHEMA 
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1024,
  },
  image: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    enum: ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Western', 'Animation'],
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 1000,
  },
}, {
  timestamps: true,
}
);

// movieSchema.set('toObject', { virtuals: true })
movieSchema.set('toJSON', { virtuals: true })

movieSchema.virtual('genreStr').get(function () {
  return this.genre.join(', ')
})

movieSchema.pre('save', function (next) {
  console.log('SAVING MOVIE')
  next()
})

movieSchema.post('save', function (doc, next) {
  console.log('SAVING MOVIE', doc.title)
  next()
})



module.exports = mongoose.model('Movie', movieSchema);

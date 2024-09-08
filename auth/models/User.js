const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    // match: `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/`,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now(),
  //   immutable: true
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now()
  // },
}, {
  timestamps: true
})


// userSchema.pre('save', function(next) {

//   this.updatedAt = Date.now()
//   next()
// })

module.exports = mongoose.model('User', userSchema)
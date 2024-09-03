const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: { type: String, required: [true, 'Title is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  image: { type: String, default: 'https://picsum.photos/200/300?random=1' },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Product', ProductSchema)
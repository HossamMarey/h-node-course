const Product = require('../models/product');
const User = require('../models/user');

module.exports.getProducts = async (req, res, next) => {
  const products = await Product.find().populate('user')
  res.send(products)
}

module.exports.getProduct = async (req, res, next) => {

  try {
    const product = await Product.findById(req.params.productId)

    if (!product) {
      return res.status(404).send({
        message: 'Product Not Found'
      })
    }

    res.send(product)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports.createProduct = async (req, res, next) => {

  try {

    const resp = await Product.create(req.body)
    res.send(resp)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports.deleteProduct = async (req, res, next) => {

  try {
    const { productId } = req.params

    const product = await Product.findById(productId)

    if (!product) {
      return res.status(404).send({
        message: 'Product Not Found'
      })
    }

    await Product.findByIdAndDelete(productId)

    // await Product.findByIdAndUpdate(product.user, {

    // })
    res.send({ message: 'Product Deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}



//////////////////////// user ////////////////// 
module.exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId).populate('cart.items.product')

    if (!user) {
      return res.status(404).send({
        message: 'user Not Found'
      })
    }

    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }

}
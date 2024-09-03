const { Cart } = require("../models/cart");
const { Product } = require("../models/product");


module.exports.getProducts = async (req, res) => {

  // res.sendFile(path.join(rootDir, "views", "products.html"));

  console.log(req.query)
  const searchKey = req.query.search || '';

  let products = await Product.getAll();


  const cartProductsIds = await Cart.getAll();
  //productId
  const cartProducts = []

  cartProductsIds.forEach(cart => {

    products.forEach(product => {

      if (product?.id === cart.productId) {
        cartProducts.push(product)
      }
    })

  })


  if (searchKey && products?.length) {
    products = products.filter(product => product.title.toLowerCase().includes(searchKey.toLowerCase()))
  }


  res.render('products.ejs', { pageTitle: "Products Page", products, cartProducts });
}


module.exports.renderProductForm = async (req, res) => {

  res.render('add-product.ejs', { pageTitle: "Products Page" });
}


module.exports.addProduct = async (req, res) => {
  const { title, price } = req.body;
  const product = new Product(title, Number(price));
  await product.save();
  res.redirect("/products");
}

module.exports.addCartProduct = async (req, res) => {
  const { productId } = req.body;
  const cart = new Cart(productId);
  await cart.save();
  res.redirect("/products");
}

module.exports.getProduct = async (req, res) => {

  const productId = req.params.productId
  const allProducts = await Product.getAll()

  const product = allProducts.find(product => product?.id === productId)

  if (!product) {
    return res.status(404).send("Product Not Found")
  }
  res.render('product.ejs', { pageTitle: "Product Page", product });
}


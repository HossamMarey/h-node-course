const { getRandomNumber } = require("../utils/random");
const uuid = require("uuid").v4
const fs = require("fs/promises");
const path = require("path");

const rootDir = require("../utils/path");


module.exports.Cart = class Cart {
  constructor(productId) {
    this.productId = productId
    this.id = uuid()
  }

  async save() {
    const cartProducts = await Cart.getAll()
    cartProducts.push(this)
    // save to json 
    await fs.writeFile(path.join(rootDir, "data", "cart.json"), JSON.stringify(cartProducts))
    return cartProducts
  }

  static async getAll() {
    try {

      const cartProductsJson = await fs.readFile(path.join(rootDir, "data", "cart.json"))

      if (cartProductsJson) {
        const cartProducts = JSON.parse(cartProductsJson)
        return cartProducts
      }
      return []
    } catch (error) {
      console.log('SSS', error)
      return []
    }
  }
}
const { getRandomNumber } = require("../utils/random");
const uuid = require("uuid").v4
const fs = require("fs/promises");
const path = require("path");

const rootDir = require("../utils/path");

// const p = {
//   title: 'ddd',
//   price: 123,
//   image: 'https://picsum.photos/200/300?random=1',
//   id: 'a633da43-fdad-42d2-8e6c-79cd8cc4c45a'
// }

// const p2 = {}
// p2.title = 'ssss'
// p2.price = 222
// p2.image = 'https://picsum.photos/200/300?random=7152489'
// p2.id = 'a633da43-fdad-42d2-8e6c-79cd8cc4c45a'

module.exports.Product = class Product {

  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.image = `https://picsum.photos/200/300?random=${getRandomNumber(100, 10000000)}`
    this.id = uuid()
  }

  async save() {
    const products = await Product.getAll()
    products.push(this)
    // save to json 
    await fs.writeFile(path.join(rootDir, "data", "products.json"), JSON.stringify(products))
    return products
  }

  static async getAll() {
    const productsJson = await fs.readFile(path.join(rootDir, "data", "products.json"))

    if (productsJson) {
      const products = JSON.parse(productsJson)
      return products
    }
    return []
  }
}
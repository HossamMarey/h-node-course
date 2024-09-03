const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs/promises");
const rootDir = require("../utils/path");
const { getProducts, addProduct, renderProductForm, addCartProduct, getProduct, addToCart } = require("../controllers/products");

// /products/ ....
router.get("/", getProducts);
router.get("/add-product", renderProductForm);
router.post("/add-product", addProduct);
router.post("/add-top-cart", addCartProduct);
router.post("/add-cart", addToCart);
router.get("/:productId", getProduct);

module.exports = router
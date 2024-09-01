const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs/promises");
const rootDir = require("../utils/path");
const { getProducts, addProduct, renderProductForm, addCartProduct, getProduct } = require("../controllers/products");

// /products/ ....
router.get("/", getProducts);
router.get("/add-product", renderProductForm);
router.post("/add-product", addProduct);
router.post("/add-top-cart", addCartProduct);
router.get("/:productId", getProduct);

module.exports = router
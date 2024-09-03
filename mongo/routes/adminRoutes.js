const express = require("express");
const { getProducts, createProduct, getProduct, createUser, getUser, deleteProduct } = require("../controllers/admin");
const router = express.Router();


// / admin / ....


router.get("/products", getProducts);
router.get("/products/:productId", getProduct);
router.post("/products", createProduct);
router.delete("/products/:productId", deleteProduct);

router.post("/users", createUser);
router.get("/users/:userId", getUser);

module.exports = router
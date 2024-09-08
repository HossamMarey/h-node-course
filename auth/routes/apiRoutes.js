const express = require("express");
const router = express.Router();

const { postRegister, getAllUsers, postLogin } = require("../controllers/apiController");
const { protect, protectAdmin } = require("../middlewares/authMiddleware");

// /api/...

router.post("/register", postRegister);
router.post("/login", postLogin);

router.get("/users", protect, getAllUsers);
router.get("/admin/users", protect, protectAdmin, getAllUsers);
// router.post("/products", protect, createProduct);




module.exports = router
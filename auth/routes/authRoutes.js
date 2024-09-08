const express = require("express");
const router = express.Router();

const { renderLogin } = require("../controllers/authController");

// /...
router.get("/", renderLogin);



module.exports = router
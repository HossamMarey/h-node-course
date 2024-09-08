const express = require("express");
const router = express.Router();

const { renderLogin, postLogin, postLogout } = require("../controllers/authController");

// /...
router.get("/", renderLogin);
router.post("/login", postLogin);
router.post("/logout", postLogout);



module.exports = router
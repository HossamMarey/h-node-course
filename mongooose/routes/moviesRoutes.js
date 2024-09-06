const express = require("express");
const router = express.Router();
const { addMovie } = require("../controllers/movies");

// /movies/ ....
router.post("/", addMovie);


module.exports = router
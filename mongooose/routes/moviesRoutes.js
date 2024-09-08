const express = require("express");
const router = express.Router();
const upload = require('../multer')


const { addMovie, getMovies, updateMovie, uploadImage } = require("../controllers/movies");

// /movies/ ....
router.get("/", getMovies);
router.post("/", addMovie);
router.put("/", updateMovie);
router.post("/upload", upload.single('image'), uploadImage);


module.exports = router
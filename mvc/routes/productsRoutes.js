const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs/promises");
const rootDir = require("../utils/path");


router.get("/", (req, res) => {

  res.sendFile(path.join(rootDir, "views", "products.html"));
});

module.exports = router
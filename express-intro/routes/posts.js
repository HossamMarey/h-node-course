const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  ///
  console.log("posts", req.body);
  res.send(req.body);
});

module.exports = router;

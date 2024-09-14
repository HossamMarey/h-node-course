const express = require("express");
const app = express();

app.use(express.json())

// ROUTES 
app.use("/", (req, res) => {
  res.json({
    message: "Hello world"
  })
});

app.use((req, res) => {
  res.status(404).send("<h1> Not found</h1>");
});

// START SERVER
app.listen(5000, (err) => {
  console.log("server is running on http://localhost:5000");
});

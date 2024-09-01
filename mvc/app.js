const express = require("express");
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/productsRoutes");
const homeRoutes = require("./routes/homeRoutes");
const path = require("path");

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES 

app.use("/products", productsRoutes);
app.use("/", homeRoutes);

app.use((req, res) => {
  res.status(404).send("<h1> Not found</h1>");
});


// START SERVER
app.listen(5000, (err) => {
  console.log("server is running on http://localhost:5000");
});

const express = require("express");
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/productsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const homeRoutes = require("./routes/homeRoutes");
const path = require("path");
const initDB = require('./db')

const app = express();

initDB()

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

// ROUTES 

app.use("/products", productsRoutes);
app.use("/admin", adminRoutes);
app.use("/", homeRoutes);

app.use((req, res) => {
  res.status(404).send("<h1> Not found</h1>");
});


// START SERVER
app.listen(5000, (err) => {
  console.log("server is running on http://localhost:5000");
});

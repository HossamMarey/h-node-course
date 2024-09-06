const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const initDB = require('./db')

// IMPORT ROUTES
const moviesRoutes = require("./routes/moviesRoutes");

// INIT APP
const app = express();

// CONNECT TO DB
initDB()

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

// ROUTES 

app.use("/movies", moviesRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("<h1> Not found</h1>");
});


// START SERVER
app.listen(5000, (err) => {
  console.log("server is running on http://localhost:5000");
});

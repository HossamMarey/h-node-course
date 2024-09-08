const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config()

const session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);


var store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'sessions'
});


const initDB = require('./db')

// IMPORT ROUTES
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const apiRoutes = require("./routes/apiRoutes");


// INIT APP
const app = express();

// CONNECT TO DB
initDB()

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true },
  store: store,
}))

// app.use(session({
//   secret: 'This is a secret',
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//   },
//   store: store,
//   // Boilerplate options, see:
//   // * https://www.npmjs.com/package/express-session#resave
//   // * https://www.npmjs.com/package/express-session#saveuninitialized
//   resave: true,
//   saveUninitialized: true
// }));

// ROUTES 

app.use("/dashboard", dashboardRoutes);
app.use("/api", apiRoutes);
app.use("/", authRoutes);


app.use((req, res) => {
  res.status(404).send("<h1> Not found</h1>");
});


// START SERVER
app.listen(5000, (err) => {
  console.log("server is running on http://localhost:5000");
});

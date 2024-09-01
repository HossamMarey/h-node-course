const express = require("express");
var bodyParser = require("body-parser");
const postsRouter = require("./routes/posts");
const todosRouter = require("./routes/todos");

const app = express();

app.set("views", "views");
// app.set("view engine", "pug");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// app.use((req, res, next) => {
//   ///
//   console.log("from middleware");
//   next();
// });

app.use("/posts", postsRouter);
app.use("/todos", todosRouter);

app.use("/users", (req, res, next) => {
  ///

  res.setHeader("Content-Type", "application/json");
  console.log("from middleware 22");
  res.send("<h1>Dddddd</h1>");
});

app.get("/", (req, res, next) => {
  ///
  console.log("from middleware 22");
  res.send("<h1>homeeeeeee</h1>");
});

app.use("/", (req, res) => {
  res.status(404).send("<h1> Not found</h1>");
});

app.listen(5000, () => {
  console.log("server is running on http://localhost:5000");
});

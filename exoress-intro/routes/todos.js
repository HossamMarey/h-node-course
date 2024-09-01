const express = require("express");
const router = express.Router();
const path = require("path");
const uuid = require("uuid");
const rootDir = require("../utils/path");

const todos = [
  {
    id: "ddddd",
    title: "todo 1",
  },
];

router.get("/add", (req, res) => {
  res.send(`
      <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <form action="/todos/add" method="post">
        <input name="title" />
        <button type="submit">addd</button>
      </form>
    </body>
  </html>
      `);
});

router.post("/add", (req, res) => {
  console.log(req.body, uuid.v4());
  const { title } = req.body;

  const id = uuid.v4();

  todos.push({ id, title });

  res.redirect("/todos");
});

router.get("/", (req, res) => {
  console.log(req.body);
  //   res.sendFile(path.join(rootDir, "views", "todos.html"));
  res.render("todos.ejs", { todos, pageTitle: "My Todos" });
});

module.exports.todos = todos;

module.exports = router;

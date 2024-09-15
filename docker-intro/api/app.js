const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const asyncHandler = require("./utils/asyncHandler");
const Joi = require("joi");
const AppError = require("./utils/AppError");
const { NO_USERS } = require("./constants/errorCodes");
const morgan = require("morgan");
const app = express();
const cors = require('cors')



const allawedOrigins = process.env.NODE_ENV === 'development' ? ['http://127.0.0.1:5500'] : ['mywebsite.com']
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
  // origin: '*',
  origin: allawedOrigins,
  // allowedHeaders: ['Content-Type', 'Authorization'],
  // methods: ['GET'],
  // credentials: true 
}))

// app.use(helmet());
// escape-html

const getUsers = () => [{
  name: 'John', email: 'johndoe@me.com', password: 'ssffffs'
}]

app.get('/users', asyncHandler(async (req, res, next) => {
  const users = getUsers()

  if (!users) {
    throw new AppError(NO_USERS, 'Users not found !!', 404)
  }
  res.json({
    message: "Hello world",
    users
  })
}))

app.use((req, res) => {

  res.status(404).send("<h1> Not found</h1>");
});


app.use(errorHandler)

// START SERVER
app.listen(5000, (err) => {
  console.log("server is running on http://localhost:5000");
});

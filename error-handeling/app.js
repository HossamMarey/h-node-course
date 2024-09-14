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


const getUser = () => undefined


app.get('/home', (req, res) => {

  res.json({
    message: "Hello world"
  })
})

// ROUTES 
// app.get("/", (req, res , next) => {

//   try {

//     const user = getUser()
//     if (!user) {
//       // res.status(400)
//       throw new Error("User not found")
//       // return res.status(400).json({
//       //   message: "User not found"
//       // })
//     }


//     if (!user?.email) {
//       // res.status(400)
//       throw new Error("Email not found")
//       // return res.status(400).json({
//       //   message: "User not found"
//       // })
//     }



//     res.json({
//       message: "Hello world"
//     })
//   } catch (error) {

// return res.status(400).json({
//       //   message: "User not found"
//       // })

//     next(error)
//   }
// });

app.get("/", asyncHandler(async (req, res, next) => {

  const user = getUser()
  if (!user) {
    // res.status(400)
    throw new Error("User not found")
    // return res.status(400).json({
    //   message: "User not found"
    // })
  }

  if (!user?.email) {
    // res.status(400)
    throw new Error("Email not found")
    // return res.status(400).json({
    //   message: "User not found"
    // })
  }

  res.json({
    message: "Hello world"
  })

}))


app.post("/login", (req, res, next) => {

  const user = getUser()

  if (!user) {

    return next(new Error("User not found"))

    // throw new Error("User not found")
    // // return res.status(400).json({
    // //   message: "User not found"
    // // })
  }



  res.json({
    message: "Hello world"
  })

});


const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
})

app.post('/signup', asyncHandler(async (req, res, next) => {

  // email  / password 

  const { error, value } = schema.validate(req.body, { abortEarly: false })


  if (error) {
    throw new Error(error)
    // return next(error)
  }


  res.json({
    message: "Hello world",
    data: value
  })

}))


const getUsers = () => undefined

app.get('/users', asyncHandler(async (req, res, next) => {
  const users = getUsers()

  if (!users) {
    throw new AppError(NO_USERS, 'Users not found !!', 404)
  }
  res.json({
    message: "Hello world"
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

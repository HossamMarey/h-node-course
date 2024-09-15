const AppError = require("../utils/AppError")

const errorHandler = (error, req, res, next) => {
  // console.log('ERRROR ', error.name)


  if (error.name === 'ValidationError') {
    return res.status(400).json({ message: error.message, type: error.name, details: error.details })
  }


  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message, errorCode: error.errorCode, type: 'APP_ERROR' })
  }

  // 
  res.status(500).json({ message: error.message, type: 'SERVER_ERROR' })
}

module.exports = errorHandler
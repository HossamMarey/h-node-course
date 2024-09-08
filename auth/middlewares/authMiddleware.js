const User = require("../models/User")
const { verifyToken } = require("../utils/token")


const protect = async (req, res, next) => {
  const AuthToken = req.get('Authorization')
  const token = AuthToken?.split(' ')[1]
  if (!token) {
    res.status(401).send({ message: 'Unauthorized' })
  }

  const decoded = verifyToken(token)

  const id = decoded?.id

  if (!id) {
    return res.status(401).send({ message: 'Unauthorized' })
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' })
  }

  req.user = user

  next()
}

const protectAdmin = async (req, res, next) => {


  if (req?.user?.role !== 'admin') {
    return res.status(401).send({ message: 'Unauthorized' })
  }

  next()
}


module.exports = { protect, protectAdmin }
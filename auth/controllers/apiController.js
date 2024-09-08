
const User = require('../models/User')

const bcrybt = require('bcryptjs');
const { generateToken, verifyToken } = require("../utils/token");
const { sendEmail } = require("../utils/emails");

module.exports.postRegister = async (req, res) => {

  try {


    const userExict = await User.findOne({ email: req.body.email })

    if (userExict) {

      return res.status(400).send({ message: 'User already exist' })
    }


    const hashedPassword = await bcrybt.hash(req.body.password, 12)

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role
    })


    const resp = await newUser.save()
    delete resp.password
    res.send(resp)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports.postLogin = async (req, res) => {

  try {


    const user = await User.findOne({ email: req.body.email })


    const isPasswordCorrect = await bcrybt.compare(req.body.password, user.password)

    if (!isPasswordCorrect) {
      return res.status(400).send({ message: 'Invalid credentials' })
    }

    const token = generateToken(user._id)


    const resUser = { ...user._doc }

    delete resUser.password


    sendEmail(req.body.email, 'Login', `http://localhost:3000/login/${token}`)

    res.send({
      data: resUser,
      token: token
    })
  } catch (error) {
    res.status(500).send(error)
  }
}



module.exports.getAllUsers = async (req, res) => {



  const user = req.user

  console.log('USER ', user)
  // token 
  // token validation
  // userId => user => db 

  // resp data
  const users = await User.find().select('-password')
  res.send(users)
}
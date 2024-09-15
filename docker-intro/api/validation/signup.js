const Joi = require("joi");


const minData = new Date()
minData.setFullYear(minData.getFullYear() - 18)

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  confirmPassword: Joi.ref("password"),
  address: {
    street: Joi.string().required(),
  },
  DOB: Joi.date().required().less(minData),
  isReffed: Joi.boolean().default(false),
  refrenceDetails: Joi.string().when('isReffed', {
    is: true,
    then: Joi.required(),
    otherwise: Joi.optional()
  }),
  hobbies: Joi.array().items([Joi.string(), Joi.number()]).default([]),


})

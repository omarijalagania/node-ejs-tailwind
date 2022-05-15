const Joi = require("joi")

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  })

  return schema.validate(data)
}

module.exports.validateLogin = validateLogin

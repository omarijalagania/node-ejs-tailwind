const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Users = require("../models/User")
const { validateLogin } = require("../schema/validation")

exports.authUser = async (req, res) => {
  const { error } = validateLogin(req.body)
  //if error, return 400 with error message
  if (error) return res.status(400).send(error.details[0].message)

  //check if user already exists
  const user = await Users.findOne({ email: req.body.email })
  if (!user) return res.status(400).send("email not found")

  //check password
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send("invalid password")

  //create and assign a token

  const token = jwt.sign(
    { _id: user._id, name: user.name },
    process.env.TOKEN_SECRET,
  )

  if (token) {
    res.cookie("x-access-token", token)
    res.redirect(`/admin/dashboard`)
  }
}

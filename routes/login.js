var express = require("express")
var router = express.Router()

router.post("/auth", function (req, res, next) {
  res.send(console.log({ email: req.body.email, password: req.body.password }))
  res.redirect("/dashboard")
})

exports.auth = router

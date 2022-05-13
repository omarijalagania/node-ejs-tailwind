var express = require("express")
var router = express.Router()

router.post("/auth", (req, res, next) => {
  if (req.body.email !== " && req.body.password !== ") {
    res.redirect("/dashboard")
  }
})

module.exports = router

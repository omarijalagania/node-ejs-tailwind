exports.authUser = (req, res, next) => {
  if (req.body.email !== " && req.body.password !== ") {
    res.redirect("/dashboard")
  }
}

exports.uploadController = async (req, res, next) => {
  let token = req.cookies["x-access-token"]
  res.cookie(["x-access-token"], token)
  res.redirect("/admin/dashboard")
}

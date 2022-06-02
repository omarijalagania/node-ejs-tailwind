const Upload = require("../models/Upload")

exports.uploadController = async (req, res, next) => {
  let token = req.cookies["x-access-token"]
  let cookie = res.cookie(["x-access-token"], token)
  const image = req.file
  if (!image) {
    return res.status(400).send("No image found")
  }
  try {
    const uploadFile = await new Upload({
      image: image.path,
    })
    await uploadFile.save()

    if (cookie) {
      res.redirect("/admin/dashboard")
    }
  } catch (error) {
    console.log(error)
  }
}

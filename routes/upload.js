var express = require("express")
var router = express.Router()
let upload = require("../controllers/upload")

/* upload */
router.post("/upload", upload.uploadController)

exports.upload = router

var express = require("express")
var router = express.Router()

let dashboard = require("../controllers/dashboard")

/* dashboard */
router.get("/dashboard", dashboard.dashboard)

exports.dashboard = router

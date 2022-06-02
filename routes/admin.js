var express = require("express")
var router = express.Router()
let dashboard = require("../controllers/dashboard")
const verifyToken = require("../config/verifyToken")
/* dashboard */
router.get("/dashboard", verifyToken, dashboard.dashboard)

exports.dashboard = router

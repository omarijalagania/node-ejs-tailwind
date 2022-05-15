var express = require("express")
var router = express.Router()

let dashboard = require("../controllers/dashboard")
let users = require("../controllers/users")

/* dashboard */
router.get("/dashboard", dashboard.dashboard)

/* users */
router.post("/auth", users.authUser)

exports.dashboard = router
exports.authUser = router

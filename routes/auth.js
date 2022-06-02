const express = require("express")
const router = express.Router()
let users = require("../controllers/users")

/* users */
router.post("/auth", users.authUser)
exports.authUser = router

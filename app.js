const createError = require("http-errors")
const express = require("express")
const verifyToken = require("./config/verifyToken")

const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

require("dotenv").config()

const indexRouter = require("./routes/index")
const adminRouter = require("./routes/admin")
const userAuth = require("./routes/auth")
const app = express()
const upload = require("./utils/image-upload")
const uploadRoute = require("./routes/upload")
// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, "public")))
//routes
app.use("/", indexRouter.login)
app.use("/admin", adminRouter.dashboard)
app.use("/user", userAuth.authUser)
app.use("/file", upload.single("image"), uploadRoute.upload)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app

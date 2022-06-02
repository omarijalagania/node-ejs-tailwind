const mongoose = require("mongoose")

const uploadSchema = new mongoose.Schema({
  image: {
    type: String,
  },
})

module.exports = mongoose.model("Upload", uploadSchema)

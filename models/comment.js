const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    omdb_movie_id: { type: String, required: true },
    user: { type: String, required: true },
    text: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model("comments", Comment)
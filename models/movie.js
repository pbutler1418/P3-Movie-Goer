const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Movie = new Schema(
  {
    // omdb_movie_id: [{ type: String, required: true }]
    title: { type: String, required: true },
    link: { type: String, required: true }
    // user: [{ type: Schema.Types.ObjectId, ref: "users" }]
    // year: { type: String, required: true },
    // imdb_rating: { type: Number, required: true },
    // description: { type: String, required: true },
    // img: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("movies", Movie)

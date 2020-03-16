const db = require("../db")
const Movie = require("../models/movie")
const User = require("../models/user")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const movies = [
    {
      title: { type: String, required: true },
      link: { type: String, required: true }
    }
  ]

  await Movie.insertMany(movies)
  await User.insertMany(users)
  console.log("Created movies")
}

const run = async () => {
  await main()
  db.close()
}

run()

const db = require("../db")
const Movie = require("../models/movie")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const movies = [
    {
      title: "batman",
      link: "batman.com",
    }
  ]
  await Movie.insertMany(movies)
}

const run = async () => {
  await main()
  db.close()
}

run()

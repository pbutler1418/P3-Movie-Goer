const db = require("../db")
const User = require("../models/user")
const Movie = require("../models/movie")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const createMovies = async () => {
  const movies = [...Array[400]].map(movie => {
    return new Movie({
      omdb_movie_id: { type: String, required: true },
      users: [{ type: Schema.Types.ObjectId, ref: "users" }]
    })
  })
}

const createUsersWithMovies = async () => {
  console.log(movies)
  let lenOfItems = 100
  const users = [...Array(lenOfItems)].map(user => {
    return {
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password_digest: faker.name.jobTitle(),
      movies: "something movie api".map(task => movie._id)
    }
  })
  await User.insertMany(users)
  console.log("Created Users!")
}

const run = async () => {
  const tasks = await createTasks()
  await createUsersWithMovies(movies)
}

run()

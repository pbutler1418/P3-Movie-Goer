const db = require("../db")
const Comment = require("../models/comment")



db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const comments = [
    {
      omdb_movie_id: '475303',
      user: 'likuna',
      text: 'great movie'
    },
    {
      omdb_movie_id: '454626',
      user: 'likuna',
      text: 'wow'
    },
    {
      omdb_movie_id: '454626',
      user: 'likuna',
      text: 'great movie wowza'
    },

  ]

  await Comment.insertMany(comments)
  console.log("Created comments")
}

const run = async () => {
  await main()
  db.close()
}

run()

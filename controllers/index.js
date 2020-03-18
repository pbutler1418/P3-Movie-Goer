const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = require("../models/user")
const Movie = require("../models/movie")
const Comment = require("../models/comment")
const db = require("../db")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const SALT_ROUNDS = 11
const TOKEN_KEY = "areallylonggoodkey"

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await new User({
      username,
      email,
      password_digest
    })

    await user.save()

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    return res.status(201).json({ user, token })
  } catch (error) {
    console.log(
      "You made it to the signUp controller, but there was an error :("
    )
    return res.status(400).json({ error: error.message })
  }
}

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        movies: user.movies
      }
      console.log(payload)
      const token = jwt.sign(payload, TOKEN_KEY)
      return res.status(201).json({ user, token })
    } else {
      res.status(401).send("Invalid Credentials")
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const changePassword = async (req, res) => {}

const createMovie = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id)
    // console.log(user)
    const movie = await new Movie(req.body)
    await movie.save()
    await user.movies.push(movie.id)
    await user.save()
    console.log(user)
    return res.status(201).json(movie)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const verifyUser = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    console.log(token)
    const user = jwt.verify(token, TOKEN_KEY)
    res.locals = user
    res.json({ user: res.locals })
  } catch (e) {
    res.status(401).send("Not Authorized")
  }
}

const getAllMovie = async (req, res) => {
  try {
    const movies = await Movie.find()
    return res.status(200).json({ movies })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if (movie) {
      return res.status(200).json({ movie })
    }
    return res.status(404).send("Movie with the specified ID does not exists")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateMovie = async (req, res) => {
  try {
    // const user = await User.findById(req.params.user_id)
    const { id } = req.params
    await Movie.findByIdAndUpdate(id, req.body, { new: true }, (err, movie) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!movie) {
        res.status(500).send("Movie not found!")
      }
      return res.status(200).json(movie)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMovieFromUser = async (req, res) => {
  const { ObjectId } = mongoose.Types
  try {
    const { item_id, user_id } = req.params
    console.log("params ===>", req.params) //user and movie id is defined
    await Movie.findByIdAndDelete(ObjectId(item_id))
    await User.updateOne(
      { _id: ObjectId(user_id) },
      { $pull: { movies: ObjectId(item_id) } }
    )
    res.status(200).send({ success: "Movie deleted" })
  } catch (error) {
    // console.log(error)
    res.status(500).send(error.message)
  }
}

// const deleteMovieFromUser = async (req, res) => {
//   try {
//     const { id, user_id } = req.params
//     const movie = await Movie.findByIdAndDelete(id)
//     const user = await User.findById(user_id)
//     const targetId = await user.movie.find(id)
//     await targetId.destroy()
//     await user.save()

//     if (deleted) {
//       return res.status(200).send("Movie has been deleted")
//     }
//     throw new Error("Movie not found")
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const createComment = async (req, res) => {
  console.log("logging from backend createcomment")
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json(comment)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

const getAllComments = async (req, res) => {
  console.log("req", req)
  try {
    const comments = await Comment.find()
    console.log(
      "logging all comments from backend getcomment - comments array",
      comments
    )
    if (comments) {
      return res.status(200).json({ comments })
    }
    return res
      .status(404)
      .send("Comment with the specified movie ID does not exists")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentsByMovieId = async (req, res) => {
  console.log("req", req)
  try {
    const { id } = req.params
    console.log("logging from backend getcomment - id", id)

    const comments = await Comment.find({ omdb_movie_id: id })
    console.log("logging from backend getcomment - comments array", comments)
    if (comments) {
      return res.status(200).json({ comments })
    }
    return res
      .status(404)
      .send("Comment with the specified movie ID does not exists")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMoviesFromUser = async (req, res) => {
  debugger
  try {
    const { user_id } = req.params
    const movies = await Movie.find({ user_id: user_id })
    if (movies) {
      return res.status(200).json({ movies })
    }
    return res.status(404).send("User with this ID does not exist")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMovieByUserId = async (req, res) => {
  try {
    const { user_id, movie_id } = req.params
    const movie = await Movie.findOne({ user_id: user_id, _id: movie_id })
    if (item) {
      return res.status(200).json({ movie })
    }
    return res.status(404).send("Movie with specified ID does not exist")
  } catch (error) {
    return res.status(404).send("Movie with specified ID does not exist.")
  }
}

module.exports = {
  getAllUsers,
  verifyUser,
  signUp,
  signIn,
  changePassword,
  createMovie,
  getAllMovie,
  getMovieById,
  updateMovie,
  // updateMovieFromUser,
  deleteMovieFromUser,
  getMoviesFromUser,
  getMovieByUserId,
  createComment,
  getCommentsByMovieId,
  getAllComments
}

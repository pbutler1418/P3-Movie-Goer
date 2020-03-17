const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()
const { ensureLoggedIn } = require("../helpers")

router.post("/sign-up", controllers.signUp)
router.post("/sign-in", controllers.signIn)
router.post("/change-password", controllers.changePassword)

router.get("/", (req, res) => res.send("This is root!"))
router.post("/items", controllers.createMovie)
router.get("/items", controllers.getAllMovie)
router.get("/users", controllers.getAllUsers)
router.get("/items/:id", controllers.getMovieById)
router.put("/items/:id", controllers.updateMovie)
// router.delete("/items/:id", controllers.deleteMovie)
router.delete("/users/:user_id/items/:item_id", controllers.deleteMovieFromUser)
// router.update("/users/:user_id/items/:item_id", controllers.updateMovieFromUser)
router.post("/users/:user_id/items", controllers.createMovie)
router.get("/users/:user_id/items", controllers.getMoviesFromUser)
router.get("/verify", controllers.verifyUser)

router.post("/comments", controllers.createComment)
router.get("/comments", controllers.getAllComments)
router.get("/movies/:id/comments", controllers.getCommentsByMovieId)

module.exports = router

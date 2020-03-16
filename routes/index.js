const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()
const {ensureLoggedIn} = require("../helpers")

router.post("/sign-up", controllers.signUp)
router.post("/sign-in", controllers.signIn)
router.post("/change-password", controllers.changePassword)

router.get("/", (req, res) => res.send("This is root!"))
router.post("/items", ensureLoggedIn, controllers.createMovie)
router.get("/movies", controllers.getAllMovie)
router.get("/items/:id", controllers.getMovieById)
router.put("/movies/:id", controllers.updateMovie)
router.delete("/movies/:id", controllers.deleteMovie)
router.get("/users/:user_id/items/:item_id", controllers.getMovieByUserId)
router.get("/users/:user_id/items", controllers.getMoviesFromUser)
// router.get("/users/:id/items", controllers.getItemsFromUser)
router.get("/verify", controllers.verifyUser)


router.post("/comments", controllers.createComment)
router.get("/comments", controllers.getAllComments)
router.get("/movies/:id/comments", controllers.getCommentsByMovieId)


module.exports = router

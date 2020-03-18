module.exports = {
  ensureLoggedIn: (req, res, next) => {
    const jwt = require("jsonwebtoken")
    const TOKEN_KEY = "areallylonggoodkey"
    try {
      const token = req.headers.authorization.trim().split(" ")[1]
      const data = jwt.verify(token, TOKEN_KEY)
      res.locals.user = data
      req.user = data
      next()
    } catch (error) {
      console.log(error)
      res.status(403).send({ error: "Unauthorized" })
    }
  }
}

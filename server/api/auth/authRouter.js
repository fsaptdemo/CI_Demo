const authRouter = require("express").Router();
//middlewares
const { isUserValid } = require("./authMiddleware");
//models
const { User } = require("../../db/index");

authRouter.post("/register", isUserValid, async (req, res) => {
  User.encryptUser(req.body)
    .then((token) => {
      res.status(201).json({ token });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not register user",
        error: err.message,
      });
    });
});

authRouter.post("/login", isUserValid, (req, res) => {
  User.authenticate(req.body)
    .then((token) => {
      res.status(200).json({
        message: `Welcome back`,
        token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Could not login user",
        error: err.message,
      });
    });
});

module.exports = authRouter;

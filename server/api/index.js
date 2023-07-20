const router = require("express").Router();
//routers
const authRouter = require("./auth/authRouter");
const plantsRouter = require("./plantsRouter");
//middlewares
const { validateToken } = require("./middlewares");

// routes
router.use("/auth", authRouter);
router.use("/plants", validateToken, plantsRouter);

module.exports = router;

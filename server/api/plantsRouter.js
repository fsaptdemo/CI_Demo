const plantsRouter = require("express").Router();
//models
const { Plant } = require("../db/index");

plantsRouter.get("/", (req, res) => {
  Plant.getUserPlants(parseInt(req.user.id))
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
        message: "Could not retrieve plants for that user",
      });
    });
});

module.exports = plantsRouter;

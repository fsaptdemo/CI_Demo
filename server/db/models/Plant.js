const Sequelize = require("sequelize");
const db = require("../db");

const Plant = db.define("Plant", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imgUrl: {
    type: Sequelize.STRING,
  },
});

Plant.getUserPlants = (UserId) => {
  return Plant.findAll({
    attributes: ["id", "name", "type", "imgUrl", "UserId"],
    where: {
      UserId,
    },
  });
};

module.exports = Plant;

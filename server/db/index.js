const db = require("./db");
const User = require("./models/User");
const Plant = require("./models/Plant");

Plant.belongsTo(User);
User.hasMany(Plant);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const user = await User.create({
    username: "user",
    password: "pass",
  });

  await Plant.create({
    name: "Franky",
    type: "Crassula ovata",
    UserId: user.id,
    imgUrl:
      "https://redsquareflowers.com/wp-content/uploads/2020/09/Crassula-Ovata-Jade.png ",
  });
};

module.exports = {
  db,
  Plant,
  syncAndSeed,
  User,
};

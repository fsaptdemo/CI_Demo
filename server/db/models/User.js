const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../db");

const User = db.define(
  "User",
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    hooks: {
      async beforeCreate(seedUser) {
        const user = seedUser.dataValues;
        if (user.password) {
          user.password = await bcrypt.hash(
            user.password,
            parseInt(process.env.ROUNDS) || 8
          );
        }
      },
    },
  }
);

User.generateToken = (user) => {
  return jwt.sign(
    //payload
    {
      userId: user.id,
      username: user.username,
    },
    //secret or private key
    process.env.JWT_SECRET || "super seceret super safe",
    //options
    // set the algorithm that the data is hashed with
    // set the token expiration here
    { algorithm: process.env.JWT_ALGO || "HS256", expiresIn: "24h" }
  );
};

User.encryptUser = async (user) => {
  //create user
  const { dataValues } = await User.create(user);
  //return the jwt for the newly created user
  return User.generateToken(dataValues);
};

User.authenticate = async ({ username, password }) => {
  //Find the user based on the username
  const user = await User.findOne({
    where: { username },
  });

  //Compare the password in the db with the password provided by the user with bcrypt
  const res = await bcrypt.compare(password, user.password);

  //If they match then generate a token for the user
  if (res) {
    return User.generateToken(user);
  }

  //If they don't match throw an error
  const error = Error("bad credentials");
  error.status = 401;
  throw error;
};

User.validate = async (token) => {
  try {
    const { userId } = await jwt.verify(
      token,
      process.env.JWT_SECRET || "super seceret super safe"
    );

    const user = await User.findByPk(userId);

    if (user) {
      return user;
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  } catch (ex) {
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

module.exports = User;

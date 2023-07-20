const { User } = require("../db/index");

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.validate(token);

    //setting the user's dataValues to the request means that we can pass this new data to our endpoint
    req.user = user.dataValues;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Please provide a JWT in the header" });
  }
};

module.exports = {
  validateToken,
};

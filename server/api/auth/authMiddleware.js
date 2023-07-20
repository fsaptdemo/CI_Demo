/**
 *
 * Checks if the user that is registering
 * has a valid format:
 *
 * username: type String,
 * password: type String
 */
const isUserValid = (req, res, next) => {
  const { username, password } = req.body;

  if (
    !Boolean(
      username &&
        password &&
        typeof username === "string" &&
        typeof password === "string"
    )
  ) {
    return res
      .status(400)
      .json({ message: "Please provide a username and a password" });
  }
  next();
};

module.exports = {
  isUserValid,
};

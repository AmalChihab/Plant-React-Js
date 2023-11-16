const db = require("../models");
const User = db.User;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Check if username is taken
    const usernameUser = await User.findOne({ username: req.body.username }).exec();
    if (usernameUser) {
      return res.status(400).send({ message: "Failed! Username is already in use!" });
    }

    // Check if email is taken
    const emailUser = await User.findOne({ email: req.body.email }).exec();
    if (emailUser) {
      return res.status(400).send({ message: "Failed! Email is already in use!" });
    }

    next();
  } catch (error) {
    return res.status(500).send({ message: error.message || "Internal Server Error" });
  }
};

// Extend the module.exports object
module.exports = {
  checkDuplicateUsernameOrEmail,
};

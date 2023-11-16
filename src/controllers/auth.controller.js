const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models');
const User = db.User;

const signup = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

    res.status(200).send({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const signin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = user.comparePassword(req.body.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({ accessToken: token });
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

module.exports = {
  signup,
  signin,
};

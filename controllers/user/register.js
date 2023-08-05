const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { requestError } = require('../../helpers');
const User = require('../../models/user');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password, name } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw requestError(409, 'Email in use');
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    email,
    name,
    password: hashPassword,
  });

  const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: '2h' });

  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    token,
    user: {
      email,
      name,
      theme: user.theme,
    },
  });
};

module.exports = register;

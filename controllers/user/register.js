const bcrypt = require('bcryptjs');

const { requestError } = require('../../helpers');
const User = require('../../models/user');

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

  res.status(201).json({
    user: {
      email: newUser.email,
    },
  });
};

module.exports = register;

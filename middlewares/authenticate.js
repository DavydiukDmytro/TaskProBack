const jwt = require('jsonwebtoken');

const { requestError } = require('../helpers');
const User = require('../models/user');

require('dotenv').config();

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [type, token] = authorization.split(' ');

  // if (type !== 'Bearer') {
  //   throw requestError(401, 'Token type is not valid');
  // }
  if (!token) {
    throw requestError(401, 'No token provider');
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);

    if (token !== user.token) {
      throw requestError(401, 'Not authorized');
    }
    req.user = user;
  } catch (error) {
    if (
      error.name === 'TokenExpiredError' ||
      error.name === 'JsonWebTokenError'
    ) {
      throw requestError(401, 'Not authorized');
    }
    throw error;
  }
  next();
};

module.exports = authenticate;

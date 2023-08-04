const controllerWrapper = require('../../helpers');

const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');

module.exports = {
  login: controllerWrapper(login),
  register: controllerWrapper(register),
  logout: controllerWrapper(logout),
  updateAvatar: controllerWrapper(updateAvatar),
};

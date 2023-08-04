const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const { controllerWrapper } = require('../../helpers');
const current = require('./current');
const updateTheme = require('./updateTheme');

module.exports = {
  login: controllerWrapper(login),
  register: controllerWrapper(register),
  logout: controllerWrapper(logout),
  updateAvatar: controllerWrapper(updateAvatar),
  current: controllerWrapper(current),
  updateTheme: controllerWrapper(updateTheme),
};

const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const updateUser = require('./updateUser');
const { controllerWrapper } = require('../../helpers');
const current = require('./current');
const updateTheme = require('./updateTheme');
const messageInSupport = require('./messageInSupport');

module.exports = {
  login: controllerWrapper(login),
  register: controllerWrapper(register),
  logout: controllerWrapper(logout),
  updateUser: controllerWrapper(updateUser),
  current: controllerWrapper(current),
  updateTheme: controllerWrapper(updateTheme),
  messageInSupport: controllerWrapper(messageInSupport),
};

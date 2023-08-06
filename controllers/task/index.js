const { controllerWrapper } = require('../../helpers');
const deleteTask = require('./deleteTask');
const updateTask = require('./updateTask');

module.exports = {
  updateTask: controllerWrapper(updateTask),
  deleteTask: controllerWrapper(deleteTask),
};

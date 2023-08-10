const { controllerWrapper } = require('../../helpers');
const addTask = require('./addTask');
const deleteTask = require('./deleteTask');
const updateTask = require('./updateTask');

module.exports = {
  addTask: controllerWrapper(addTask),
  updateTask: controllerWrapper(updateTask),
  deleteTask: controllerWrapper(deleteTask),
};

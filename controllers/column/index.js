const { controllerWrapper } = require('../../helpers');
const addColumn = require('./addColumn');
const addTask = require('./addTask');
const deleteColumn = require('./deleteColumn');
const updateColumn = require('./updateColumn');

module.exports = {
  addColumn: controllerWrapper(addColumn),
  updateColumn: controllerWrapper(updateColumn),
  deleteColumn: controllerWrapper(deleteColumn),
  addTask: controllerWrapper(addTask),
};

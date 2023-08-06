const { controllerWrapper } = require('../../helpers');
const addBoard = require('./addBoard');
const deleteBoard = require('./deleteBoard');
const getAll = require('./getAll');
const updateBoard = require('./updateBoard');
const updateBoardBcg = require('./updateBoardBcg');

module.exports = {
  getAll: controllerWrapper(getAll),
  addBoard: controllerWrapper(addBoard),
  updateBoard: controllerWrapper(updateBoard),
  updateBoardBcg: controllerWrapper(updateBoardBcg),
  deleteBoard: controllerWrapper(deleteBoard),
};

const { requestError } = require('../../helpers');
const Board = require('../../models/board');
const Column = require('../../models/column');
const Task = require('../../models/task');

const deleteBoard = async (req, res) => {
  const { boardId } = req.params;
  const board = await Board.findById(boardId);

  if (!board) {
    throw requestError(404, 'Board not found');
  }
  const columns = await Column.find({ board: board._id });

  for (const column of columns) {
    await Task.deleteMany({ column: column._id });
    await Column.findByIdAndDelete(column._id);
  }
  await Board.findByIdAndDelete(boardId);
  res.status(204).json();
};

module.exports = deleteBoard;

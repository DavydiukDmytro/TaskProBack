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
    await column.remove();
  }
  await board.remove();
  res.status(200).json();
};

module.exports = deleteBoard;

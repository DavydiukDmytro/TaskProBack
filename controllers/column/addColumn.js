const { requestError } = require('../../helpers');
const Board = require('../../models/board');
const Column = require('../../models/column');

const addColumn = async (req, res) => {
  const { boardId, title } = req.body;
  const board = await Board.findById(boardId);

  if (!board) {
    throw requestError(409, 'Board not found');
  }

  const column = await Column.create({ title, board: board._id });
  res.status(201).json(column);
};

module.exports = addColumn;

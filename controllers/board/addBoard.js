const Board = require('../../models/board');

const addBoard = async (req, res) => {
  const { _id } = req.user;
  const result = await Board.create({ ...req.body, user: _id });
  const { user, ...newBoard } = result.toObject();
  res.status(201).json(newBoard);
};

module.exports = addBoard;

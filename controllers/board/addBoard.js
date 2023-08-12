const Board = require('../../models/board');

const addBoard = async (req, res) => {
  const { _id } = req.user;
  const { title, icon, background } = req.body;

  const result = await Board.create({ title, icon, background, user: _id });
  const { user, ...newBoard } = result.toObject();
  res.status(201).json(newBoard);
};

module.exports = addBoard;

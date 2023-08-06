const Board = require('../../models/board');

const addBoard = async (req, res) => {
  const { _id: user } = req.user;
  const result = await Board.create({ ...req.body, user });
  res.status(201).json({ _id: result.id });
};

module.exports = addBoard;

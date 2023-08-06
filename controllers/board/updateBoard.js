const { requestError } = require('../../helpers');
const Board = require('../../models/board');

const updateBoard = async (req, res) => {
  const { boardId } = req.params;
  const { _id: user } = req.user;
  const result = await Board.findByIdAndUpdate(
    boardId,
    { ...req.body, user },
    { new: true }
  );
  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.status(200).json({ message: 'Successful update' });
};

module.exports = updateBoard;

const { requestError } = require('../../helpers');
const Board = require('../../models/board');

const updateBoard = async (req, res) => {
  const { boardId } = req.params;
  const result = await Board.findByIdAndUpdate(boardId, req.body, {
    new: true,
  });
  if (!result) {
    throw requestError(404, 'Not found');
  }
  const { user, ...newBoard } = result.toObject();
  res.status(200).json(newBoard);
};

module.exports = updateBoard;

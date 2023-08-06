const { requestError } = require('../../helpers');
const Board = require('../../models/board');

const updateBoardBcg = async (req, res) => {
  const { boardId } = req.params;
  const { background } = req.body;
  const result = await Board.findByIdAndUpdate(
    boardId,
    { background },
    { new: true }
  );
  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.status(200).json({ message: 'Background is updated' });
};

module.exports = updateBoardBcg;

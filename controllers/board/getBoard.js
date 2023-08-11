const { Types } = require('mongoose');
const Column = require('../../models/column');
const { requestError } = require('../../helpers');

const getBoard = async (req, res) => {
  const { boardId } = req.params;

  const result = await Column.aggregate([
    { $match: { board: new Types.ObjectId(boardId) } },
    {
      $lookup: {
        from: 'tasks',
        localField: '_id',
        foreignField: 'column',
        as: 'tasks',
      },
    },
    {
      $project: {
        title: 1,
        tasks: 1,
      },
    },
  ]);

  if (result.length === 0) {
    throw requestError(404, 'Board not found');
  }

  res.json([...result]);
};

module.exports = getBoard;

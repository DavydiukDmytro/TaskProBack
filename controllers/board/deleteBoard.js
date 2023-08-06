const { requestError } = require('../../helpers');
const Board = require('../../models/board');
const Task = require('../../models/task');
const Column = require('../../models/column');

const deleteBoard = async (req, res) => {
  const { boardId } = req.params;
  const result = await Board.findByIdAndDelete(boardId);
  if (!result) {
    throw requestError(404, 'Not found');
  }
  const columns = await Column.find({ board: boardId }).populate('tasks');
  for (const column of columns) {
    if (column.tasks.length) {
      await Task.deleteMany({
        _id: { $in: column.tasks.map(task => task._id) },
      });
    }
    await Column.findByIdAndDelete(column.id);
  }

  res.status(200).json({ message: 'Board deleted' });
};

module.exports = deleteBoard;

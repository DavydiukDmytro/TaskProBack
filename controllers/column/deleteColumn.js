const { requestError } = require('../../helpers');
const Column = require('../../models/column');
const Task = require('../../models/task');

const deleteColumn = async (req, res) => {
  const { columnId } = req.params;
  const column = await Column.findById(columnId).populate('tasks');
  if (!column) {
    throw requestError(404, 'Not found');
  }

  const { tasks } = column;
  await Task.deleteMany({ _id: { $in: tasks.map(task => task._id) } });
  await Column.findByIdAndDelete(columnId);

  res.status(200).json({ message: 'Column deleted' });
};

module.exports = deleteColumn;

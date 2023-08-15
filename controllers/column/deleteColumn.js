const { requestError } = require('../../helpers');
const Column = require('../../models/column');
const Task = require('../../models/task');

const deleteColumn = async (req, res) => {
  const { columnId } = req.params;
  const column = await Column.findById(columnId);
  if (!column) {
    throw requestError(404, 'Column not found');
  }
  await Task.deleteMany({ column: column._id });
  const result = await Column.findByIdAndDelete(columnId);
  if (!result) {
    throw requestError(404, `Task ${columnId} not found`);
  }

  res.status(204).json();
};

module.exports = deleteColumn;

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
  await column.remove();
  res.status(200).json()
};

module.exports = deleteColumn;


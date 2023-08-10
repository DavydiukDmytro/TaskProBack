const { requestError } = require('../../helpers');
const Column = require('../../models/column');

const deleteColumn = async (req, res) => {
  const { columnId } = req.params;
  const column = await Column.findByIdAndDelete(columnId);
  if (!column) {
    throw requestError(404, `Column ${columnId} not found`);
  }

  // const { tasks } = column;
  // await Task.deleteMany({ _id: { $in: tasks.map(task => task._id) } });
  // await Column.findByIdAndDelete(columnId);

  res.status(204).json();
};

module.exports = deleteColumn;

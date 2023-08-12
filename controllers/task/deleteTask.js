const { requestError } = require('../../helpers');
const Task = require('../../models/task');

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const result = await Task.findByIdAndDelete(taskId);
  if (!result) {
    throw requestError(404, `Task ${taskId} not found`);
  }
  res.status(204).json();
};

module.exports = deleteTask;

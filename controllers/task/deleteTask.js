const { requestError } = require('../../helpers');
const Task = require('../../models/task');

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const result = await Task.findByIdAndDelete(taskId);
  if (!result) {
    throw requestError(404, 'Not Found');
  }
  res.status(200).json({ message: 'Task deleted' });
};

module.exports = deleteTask;

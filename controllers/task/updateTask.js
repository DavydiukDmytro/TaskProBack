const { requestError } = require('../../helpers');
const Task = require('../../models/task');

const updateTask = async (req, res) => {
  const { taskId } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
  });
  if (!updatedTask) {
    throw requestError(404, 'No task found with that id');
  }
  res.status(200).json({ message: 'Task updated' });
};

module.exports = updateTask;

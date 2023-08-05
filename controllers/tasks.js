const { Task } = require('../models/task');
const { requestError, controllerWrapper } = require('../helpers');

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

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const result = await Task.findByIdAndDelete(taskId);
  if (!result) {
    throw requestError(404, 'Not Found');
  }
  res.status(200).json({ message: 'Task deleted' });
};

module.exports = {
  deleteTask: controllerWrapper(deleteTask),
  updateTask: controllerWrapper(updateTask),
};

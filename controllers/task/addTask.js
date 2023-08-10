const { requestError } = require('../../helpers');
const Column = require('../../models/column');
const Task = require('../../models/task');

const addTask = async (req, res) => {
  const { columnId, title, description, priority, deadline } = req.body;
  const column = await Column.findById(columnId);
  if (!column) {
    throw requestError(404, 'Column not found');
  }
  const result = await Task.create({
    title,
    description,
    priority,
    deadline,
    column: column._id,
  });

  res.status(201).json(result);
};

module.exports = addTask;

const { requestError } = require('../../helpers');
const Column = require('../../models/column');
const Task = require('../../models/task');

const addTask = async (req, res) => {
  const { columnId } = req.params;
  const column = await Column.findById(columnId).populate('tasks');
  if (!column) {
    throw requestError(404, 'Not found');
  }
  const newTask = new Task({
    ...req.body,
    column: columnId,
    order: column.tasks.length,
  });
  const savedTask = await newTask.save();
  column.tasks.push(savedTask);
  await column.updateOne({ tasks: column.tasks });

  res.status(201).json(savedTask);
};

module.exports = addTask;

const { Column } = require('../models/column');
const { Task } = require('../models/task');
const { requestError, controllerWrapper } = require('../helpers');

const addColumn = async (req, res) => {
  const { board: boardId } = req.body;
  const columns = await Column.find({ board: boardId });
  const newColumn = await Column.create({ ...req.body, order: columns.length });
  res.status(201).json(newColumn);
};

const updateColumn = async (req, res) => {
  const { columnId } = req.params;
  const result = await Column.findByIdAndUpdate(
    columnId,
    { title: req.body.title },
    {
      new: true,
    }
  );
  if (!result) {
    throw requestError(404, 'Not found');
  }
  res.status(200).json({ message: 'Successful update' });
};

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

module.exports = {
  addColumn: controllerWrapper(addColumn),
  updateColumn: controllerWrapper(updateColumn),
  deleteColumn: controllerWrapper(deleteColumn),
  addTask: controllerWrapper(addTask),
};

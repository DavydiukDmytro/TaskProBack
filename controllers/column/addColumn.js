const Column = require('../../models/column');

const addColumn = async (req, res) => {
  const { board: boardId } = req.body;
  const columns = await Column.find({ board: boardId });
  const newColumn = await Column.create({ ...req.body, order: columns.length });
  res.status(201).json(newColumn);
};

module.exports = addColumn;

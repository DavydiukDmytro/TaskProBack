const Board = require('../../models/board');
// const Column = require('../../models/column');

const getAll = async (req, res) => {
  const { _id: user } = req.user;
  const boards = await Board.find({ user }, { user: 0 });

  // const populatedBoards = await Promise.all(
  //   boards.map(async board => {
  //     const populatedColumns = await Column.find({ board: board._id })
  //       .populate('tasks')
  //       .sort({ order: 1 });

  //     const sortedColumns = populatedColumns.map(column => {
  //       const sortedTasks = column.tasks.sort((a, b) => a.order - b.order);
  //       return { ...column.toJSON(), tasks: sortedTasks };
  //     });

  //     return {
  //       ...board.toJSON(),
  //       columns: sortedColumns,
  //     };
  //   })
  // );
  res.status(200).json(boards);
};

module.exports = getAll;

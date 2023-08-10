const { requestError } = require('../../helpers');
const Column = require('../../models/column');

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
    throw requestError(404, `Column ${columnId} not found`);
  }
  res.status(200).json(result);
};

module.exports = updateColumn;

const express = require('express');
const { authenticate, validateBody } = require('../../middlewares');
const schemasColumn = require('../../schemas/schemasColumn');
const schemasTask = require('../../schemas/schemasTask');
const {
  addColumn,
  addTask,
  deleteColumn,
  updateColumn,
} = require('../../controllers/column');
const router = express.Router();

router.post(
  '/',
  authenticate,
  validateBody(schemasColumn.addSchema),
  addColumn
);
router.patch(
  '/:columnId',
  authenticate,
  validateBody(schemasColumn.updateSchema),
  updateColumn
);
router.delete('/:columnId', authenticate, deleteColumn);
router.post(
  '/:columnId/tasks',
  authenticate,
  validateBody(schemasTask.addSchema),
  addTask
);

module.exports = router;

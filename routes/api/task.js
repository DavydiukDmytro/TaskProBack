const express = require('express');
const { authenticate, validateBody } = require('../../middlewares');
const router = express.Router();
const schemeTask = require('../../schemas/schemasTask');
const { addTask } = require('../../controllers/column');
const { deleteTask, updateTask } = require('../../controllers/task');

router.post('/', authenticate, validateBody(schemeTask.addSchema), addTask);
router.delete('/:taskId', authenticate, deleteTask);
router.patch(
  '/:taskId',
  authenticate,
  validateBody(schemeTask.updateSchema),
  updateTask
);

module.exports = router;

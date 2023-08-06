const express = require('express');
const { authenticate, validateBody } = require('../../middlewares');
const {
  getAll,
  addBoard,
  updateBoard,
  updateBoardBcg,
  deleteBoard,
} = require('../../controllers/board');
const schemasBoard = require('../../schemas/schemasBoard');

const router = express.Router();

router.get('/', authenticate, getAll);
router.post('/', authenticate, validateBody(schemasBoard.addSchema), addBoard);
router.put(
  '/:boardId',
  authenticate,
  validateBody(schemasBoard.updateSchema),
  updateBoard
);
router.patch(
  '/:boardId',
  authenticate,
  validateBody(schemasBoard.updateBcgSchema),
  updateBoardBcg
);
router.delete('/:boardId', authenticate, deleteBoard);

module.exports = router;

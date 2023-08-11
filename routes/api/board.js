const express = require('express');
const { authenticate, validateBody } = require('../../middlewares');
const {
  getAll,
  addBoard,
  updateBoard,
  deleteBoard,
  getBoard,
} = require('../../controllers/board');
const schemasBoard = require('../../schemas/schemasBoard');

const router = express.Router();

router.get('/', authenticate, getAll);
router.get('/:boardId', authenticate, getBoard);
router.post('/', authenticate, validateBody(schemasBoard.addSchema), addBoard);
router.patch(
  '/:boardId',
  authenticate,
  validateBody(schemasBoard.updateSchema),
  updateBoard
);
// router.patch(
//   '/:boardId',
//   authenticate,
//   validateBody(schemasBoard.updateBcgSchema),
//   updateBoardBcg
// );
router.delete('/:boardId', authenticate, deleteBoard);

module.exports = router;

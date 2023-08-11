const express = require('express');
const { authenticate, validateBody } = require('../../middlewares');

const messageInSupport = require('../../controllers/user/messageInSupport');
const schemasSupport = require('../../schemas/schemasSupport');
const router = express.Router();

router.post(
  '/',
  authenticate,
  validateBody(schemasSupport.addSchema),
  messageInSupport
);

module.exports = router;

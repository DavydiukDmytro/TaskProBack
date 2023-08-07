const express = require('express');
const messageInSupport = require('../../controllers/user/messageInSupport');
const { authenticate, validateBody } = require('../../middlewares');
const schemasSupport = require('../../schemas/schemasSupport');
const router = express.Router();

router.post(
  '/',
  authenticate,
  validateBody(schemasSupport.addSchema),
  messageInSupport
);

module.express = router;

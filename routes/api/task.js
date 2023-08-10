const express = require('express');
const { authenticate, validateBody } = require('../../middlewares');
const router = express.Router();
const schemeTask = require('../../schemas/schemasTask');
const { addTask } = require('../../controllers/column');

router.post('/', authenticate, validateBody(schemeTask.addSchema), addTask);

module.exports = router;

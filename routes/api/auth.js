const express = require('express');
const { controllerWrapper } = require('../../helpers');
const { login } = require('../../controllers/auth');

const router = express.Router();

router.post('/registration', controllerWrapper());
router.post('/login', controllerWrapper(login));

module.exports = router;

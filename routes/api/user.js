const express = require('express');
const { controllerWrapper } = require('../../helpers');

const {
  login,
  register,
  logout,
  updateUser,
  current,
  updateTheme,
} = require('../../controllers/user');
const {
  authenticate,
  upload,
  saveImg,
  validateBody,
} = require('../../middlewares');
const schemasUser = require('../../schemas/schemasUser');

const router = express.Router();

router.post(
  '/registration',
  validateBody(schemasUser.registerSchema),
  register
);
router.post('/login', validateBody(schemasUser.loginSchema), login);
router.post('/logout', authenticate, logout);
router.put(
  '/update',
  authenticate,
  upload.single('avatar'),
  controllerWrapper(saveImg),
  updateUser
);
router.get('/current', authenticate, current);
router.patch(
  '/theme',
  validateBody(schemasUser.themeSchema),
  authenticate,
  updateTheme
);

module.exports = router;

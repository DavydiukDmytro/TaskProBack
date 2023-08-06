const express = require('express');
const { controllerWrapper } = require('../../helpers');

const {
  login,
  register,
  logout,
  updateAvatar,
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
router.patch(
  '/avatar',
  authenticate,
  upload.single('avatar'),
  controllerWrapper(saveImg),
  updateAvatar
);
router.get('/current', authenticate, current);
router.patch(
  '/theme',
  validateBody(schemasUser.themeSchema),
  authenticate,
  updateTheme
);

module.exports = router;

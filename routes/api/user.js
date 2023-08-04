const express = require('express');
const { validateBody, controllerWrapper } = require('../../helpers');

const {
  login,
  register,
  logout,
  updateAvatar,
  current,
  updateTheme,
} = require('../../controllers/user');
const { authenticate, upload, saveImg } = require('../../middlewares');
const schemasUser = require('../../schemas/schemasUser');

const router = express.Router();

router.post(
  '/registration',
  validateBody(schemasUser.registerSchema),
  register
);
router.post('/login', validateBody(schemasUser.loginSchema), login);
router.post('/logout', controllerWrapper(authenticate), logout);
router.patch(
  '/avatar',
  controllerWrapper(authenticate),
  upload.single('avatar'),
  controllerWrapper(saveImg),
  updateAvatar
);
router.get('/current', controllerWrapper(authenticate), current);
router.patch('/theme', controllerWrapper(authenticate), updateTheme);

module.exports = router;

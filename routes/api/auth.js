const express = require('express');
const { validateBody } = require('../../helpers');
const { schemas } = require('../../models/user');

const {
  login,
  register,
  logout,
  updateAvatar,
} = require('../../controllers/auth');
const { authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.post('/registration', validateBody(schemas.registerSchema), register);
router.post('/login', validateBody(schemas.loginSchema), login);
router.post('/logout', authenticate, logout);
// не знаю як на Фронти буде називатися папка для зберігання завантаженого файлу
router.patch('/avatar', authenticate, upload.single('avatar'), updateAvatar);
module.exports = router;

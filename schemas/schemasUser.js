const Joi = require('joi');
const emailRegexp = require('./emailRegexp');

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const themeSchema = Joi.object({
  theme: Joi.string().valid('dark', 'light', 'violet').required(),
});

const schemasUser = {
  registerSchema,
  loginSchema,
  themeSchema,
};

module.exports = schemasUser;

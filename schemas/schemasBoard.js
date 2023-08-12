const Joi = require('joi');

const addSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  background: Joi.string(),
});

const updateSchema = Joi.object({
  title: Joi.string(),
  icon: Joi.string(),
  background: Joi.string(),
});

const updateBcgSchema = Joi.object({
  background: Joi.string().required(),
});

const schemasBoard = {
  addSchema,
  updateSchema,
  updateBcgSchema,
};

module.exports = schemasBoard;

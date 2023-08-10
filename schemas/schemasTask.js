const Joi = require('joi');

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.string().required(),
  priority: Joi.string().valid('low', 'medium', 'high', 'none'),
  columnId: Joi.string().required(),
});

const updateSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.string().required(),
  priority: Joi.string().valid('low', 'medium', 'high', 'none').required(),
  column: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
});

const schemasTask = {
  addSchema,
  updateSchema,
};

module.exports = schemasTask;

const Joi = require('joi');

const addSchema = Joi.object({
  title: Joi.string().required(),
  boardId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
});

const updateSchema = Joi.object({
  title: Joi.string().required(),
});

const schemasColumn = {
  addSchema,
  updateSchema,
};

module.exports = schemasColumn;

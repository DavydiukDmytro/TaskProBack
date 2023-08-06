const Joi = require('joi');

const addSchema = Joi.object({
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

const schemasSupport = {
  addSchema,
};

module.exports = schemasSupport;

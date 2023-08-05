const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    icon: {
      type: String,
      required: [true, 'Icon is required'],
    },
    background: {
      type: String,
      default: null,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: false }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  background: Joi.string(),
});

const updateSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  background: Joi.string().required(),
});

const updateBcgSchema = Joi.object({
  background: Joi.string().required(),
});

const schemas = {
  addSchema,
  updateSchema,
  updateBcgSchema,
};

boardSchema.post('save', handleMongooseError);

const Board = model('board', boardSchema);

module.exports = { Board, schemas };

const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    priority: {
      type: String,
      enum: ['high', 'medium', 'low', 'none'],
      default: 'none',
    },
    deadline: {
      type: String,
      required: [true, 'Deadline is required'],
    },
    column: {
      type: Schema.Types.ObjectId,
      ref: 'column',
      required: true,
    },
  },
  { versionKey: false, timestamps: false }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.string().required(),
  priority: Joi.string().valid('low', 'medium', 'high', 'none'),
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

const taskSchemas = {
  addSchema,
  updateSchema,
};

taskSchema.post('save', handleMongooseError);

const Task = model('task', taskSchema);

module.exports = { Task, taskSchemas };

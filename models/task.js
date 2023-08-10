const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const priorityArr = require('../constants/priorityArr');

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
      enum: [...Object.values(priorityArr)],
      default: priorityArr.none,
    },
    deadline: {
      type: String,
      required: [true, 'Deadline is required'],
    },
    column: {
      type: Schema.Types.ObjectId,
      ref: 'column',
      required: [true, 'Column assignment for the task is required'],
    },
  },
  { versionKey: false, timestamps: false }
);

taskSchema.post('save', handleMongooseError);

const Task = model('task', taskSchema);

module.exports = Task;

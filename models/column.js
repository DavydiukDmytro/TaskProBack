const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: 'board',
      required: [true, 'Board assignment for the column is required'],
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'task',
      },
    ],
  },
  { versionKey: false, timestamps: false }
);

columnSchema.post('save', handleMongooseError);

const Column = model('Column', columnSchema);

module.exports = Column;

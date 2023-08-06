const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

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

boardSchema.post('save', handleMongooseError);

const Board = model('board', boardSchema);

module.exports = Board;

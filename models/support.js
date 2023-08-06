const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const supportSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

supportSchema.post('save', handleMongooseError);

const SupportMail = model('support', supportSchema);

module.exports = SupportMail;

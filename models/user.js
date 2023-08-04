const { Schema, model } = require('mongoose');

// const hendleMongooseError = require('../helpers');
const emailRegexp = require('../schemas/emailRegexp');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    email: {
      type: String,
      match: [emailRegexp, 'User email is not valid'],
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      minLength: [6, 'Password should be at least 6 characters long'],
      required: [true, 'Set password for user'],
    },
    token: {
      type: String,
      default: '',
    },
    avatarUrl: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'dark',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// userSchema.post('save', hendleMongooseError);

const User = model('user', userSchema);

module.exports = User;

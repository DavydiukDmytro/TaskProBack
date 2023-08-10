const { Schema, model } = require('mongoose');
const themeArr = require('../constants/themeArr');
const { handleMongooseError } = require('../helpers');
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
      minLength: [8, 'Password should be at least 8 characters long'],
      maxLength: [64, 'The password must not exceed 64 characters'],
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
      enum: [...Object.values(themeArr)],
      default: themeArr.dark,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = User;

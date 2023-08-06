const authenticate = require('./authenticate');
const upload = require('./upload');
const saveImg = require('./saveImg');
const { controllerWrapper } = require('../helpers');
const validateBody = require('./validateBody');

module.exports = {
  authenticate: controllerWrapper(authenticate),
  upload,
  saveImg,
  validateBody,
};

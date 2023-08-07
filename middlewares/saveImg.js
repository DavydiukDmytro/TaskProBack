const cloudinary = require('cloudinary').v2;
const path = require('path');
const { requestError } = require('../helpers');
const updateImg = require('../cloudinary/updateImg');
const fs = require('fs').promises;
require('dotenv').config();

const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_SECRET,
});

const saveImg = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  const { filename } = req.file;
  const imgPath = path.resolve(__dirname, '../tmp', filename);
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(imgPath, options);
    const img = await updateImg(result.public_id);
    req.avatarUrl = img;
    await fs.unlink(imgPath);
  } catch (error) {
    throw requestError(500, 'The problem of saving photos.');
  }
  next();
};

module.exports = saveImg;

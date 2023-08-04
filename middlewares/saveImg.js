const cloudinary = require('cloudinary').v2;
const path = require('path');
const { requestError } = require('../helpers');
const updateImg = require('../cloudinary/updateImg');
const fs = require('fs').promises;

cloudinary.config({
  cloud_name: 'dw3h1zhqf',
  api_key: '278961358311597',
  api_secret: '6pb-sMlcFZyOf3rsdwY7fZQnyJs',
});

const saveImg = async (req, res, next) => {
  if (!req.file) {
    throw requestError(400, 'File is require!');
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
    console.log(img);
  } catch (error) {
    throw requestError(500, 'The problem of saving photos.');
  }
  next();
};

module.exports = saveImg;

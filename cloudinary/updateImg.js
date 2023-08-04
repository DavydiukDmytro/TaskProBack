const cloudinary = require('cloudinary').v2;

const updateImg = async publicId => {
  const imageTag = await cloudinary.url(publicId, {
    transformation: [
      { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
    ],
  });
  return imageTag;
};

module.exports = updateImg;

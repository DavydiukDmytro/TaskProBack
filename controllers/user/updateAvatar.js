const { requestError } = require('../../helpers');
const User = require('../../models/user');

const updateAvatar = async (req, res) => {
  if (!req.avatarUrl) {
    throw requestError(500, 'Image processing failed.');
  }
  const result = await User.findByIdAndUpdate(
    req.user._id,
    { avatarUrl: req.avatarUrl },
    { new: true }
  );
  res.json({
    user: {
      email: result.email,
      avatarUrl: result.avatarUrl,
    },
  });
};

module.exports = updateAvatar;

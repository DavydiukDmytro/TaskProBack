// const path = require('path');
// const avatarDir = path.join(__dirname, '../', '../', 'public', 'avatars');
const { User } = require('../../models/user');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, {});
};

module.exports = updateAvatar;

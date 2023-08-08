const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const updateUser = async (req, res) => {
  const updateData = JSON.parse(req.body.updateInfo);

  let avatarUrl = req.user.avatarUrl;

  if (req.avatarUrl) {
    avatarUrl = req.avatarUrl;
  }
  const bodyUpdate = { ...updateData, avatarUrl };

  if (updateData.password) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(updateData.password, salt);
    bodyUpdate.password = hashPassword;
  }

  const result = await User.findByIdAndUpdate(req.user._id, bodyUpdate, {
    new: true,
  });
  res.status(200).json({
    user: {
      email: result.email,
      name: result.name,
      avatarUrl: result.avatarUrl,
      theme: result.theme,
    },
  });
};

module.exports = updateUser;

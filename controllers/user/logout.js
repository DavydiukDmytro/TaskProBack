const { requestError } = require('../../helpers');
const User = require('../../models/user');

const logout = async (req, res) => {
  const user = req.user;
  // const { _id } = req.user;
  if (!user) {
    throw requestError(401, 'Not authorized');
  }
  user.token = '';
  await User.findByIdAndUpdate(user._id, user);
  // await User.findByIdAndUpdate(_id, { token: '' });
  // res.status(204).json({
  //   message: 'Logout success',
  // });
  res.json({
    message: 'Logout success',
  });
};

module.exports = logout;

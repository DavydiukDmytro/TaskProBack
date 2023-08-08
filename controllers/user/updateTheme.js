const { requestError } = require('../../helpers');
const User = require('../../models/user');

const updateTheme = async (req, res) => {
  const theme = req.body.theme;

  if (!theme) {
    throw requestError(500, 'There is no theme.');
  }
  const result = await User.findByIdAndUpdate(
    req.user._id,
    { theme },
    { new: true }
  );
  res.status(200).json({
    user: {
      email: result.email,
      theme: result.theme,
    },
  });
};

module.exports = updateTheme;

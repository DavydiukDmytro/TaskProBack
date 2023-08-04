const { requestError } = require('../../helpers');

const current = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    throw requestError(401, 'Not authorized');
  }
  res.json({
    user: {
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
      theme: user.theme,
    },
  });
};

module.exports = current;

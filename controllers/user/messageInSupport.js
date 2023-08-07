const { requestError } = require('../../helpers');
const User = require('../../models/user');
const SupportMail = require('../../models/support');
const { support, merkupLetter } = require('../support');

const messageInSupport = async (req, res) => {
  const { email, message } = req.body;
  if (!email && message === '') {
    throw requestError(400, 'Sorry, all fields must be filled');
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw requestError(404, 'User not found');
  }

  await SupportMail.create({ ...req.body });

  const userName = user.name;
  const userEmail = email;
  const messageText = message;
  const link = 'https://help.com'; // Це типу посилання на питання які часто задають

  await support({
    to: email,
    subject: 'Technical support message',
    html: merkupLetter(link, userName, userEmail, messageText),
  });

  res.json({ message: 'Your request has been accepted' });
};

module.exports = messageInSupport;

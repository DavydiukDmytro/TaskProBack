const { requestError } = require('../../helpers');
const SupportMail = require('../../models/support');
const { support, merkupLetter } = require('../support');

const messageInSupport = async (req, res) => {
  const { email, message } = req.body;
  if (!email && message === '') {
    throw requestError(400, 'Sorry, all fields must be filled');
  }

  const user = await SupportMail.findOne({ email });
  if (!user) {
    await SupportMail.create({ ...req.body });
    res.status(201).json({ message: 'Your request has been accepted' });
  } else {
    await SupportMail.findOneAndUpdate({ email }, { message }, { new: true });
    res.status(201).json({ message: 'Your request has been accepted' });
  }

  const userEmail = email;
  const messageText = message;

  await support({
    to: 'taskpro.project@gmail.com', // Пошта з тех завдання
    subject: 'Technical support message',
    html: merkupLetter(userEmail, messageText),
  });
};

module.exports = messageInSupport;

const nodemailer = require('nodemailer');
require('dotenv').config();
const { EMAIL_USER, EMAIL_PASS } = process.env;

const support = async ({ to, subject, html }) => {
  const emailOptions = {
    from: EMAIL_USER,
    to,
    subject,
    html,
  };

  const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  };
  const transporter = nodemailer.createTransport(config);

  await transporter.sendMail(emailOptions);
};

module.exports = support;

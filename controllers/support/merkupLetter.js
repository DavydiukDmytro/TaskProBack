const merkupLetter = (link, userName, userEmail, messageText) => {
  const body = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Confirmation</title>
        <style>
          /* Add your CSS styles here */
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #f9f9f9;
            padding: 10px;
            text-align: center;
          }
          .content {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Technical Support</h2>
          </div>
          <div class="content">
            <p>
              Hello ${userName},
            </p>
            <p>
              We received your inquiry with the following details:
            </p>
            <p>
              Email: ${userEmail}
            </p>
            <p>
              Message: ${messageText}
            </p>
            <p>
              Our technical support team is currently reviewing your request. We will get back to you as soon as possible.
            </p>
            <p>
              In the meantime, you can check our <a href="${link}">knowledge base</a> for frequently asked questions and helpful articles.
            </p>
            <p>
              Thank you for reaching out to us!
            </p>
          </div>
          <div class="footer">
            <p>
              This is an automated message. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
  return body;
};

module.exports = merkupLetter;

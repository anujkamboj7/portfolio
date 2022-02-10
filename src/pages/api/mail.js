const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default (req, res) => {
  const mailer = () => {
    const body = JSON.parse(req.body);

    const message = `
    Full Name:${body.fullName}\r\n
    Email:${body.email}\r\n
    Subject:${body.subject}\r\n
    Message:${body.message}
    `;

    const data = {
      to: "akrockstar45@gmail.com",
      from: "akrockstar45@gmail.com",
      subject: `${body.subject} sent you a message`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    };
    mail.send(data);
    res.status(200).json({
      status: "OK",
    });
  };

  mailer();
};

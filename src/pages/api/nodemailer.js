const nodemailer = require("nodemailer");

export default (req, res) => {
  async function main() {
    const body = JSON.parse(req.body);

    const message = `
    Full Name: ${body.fullName}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
    `;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GOOGLE_USERNAME,
        pass: process.env.GOOGLE_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "business.ak77@gmail.com", // sender address
      to: "business.ak77@gmail.com", // list of receivers
      subject: `${body.subject}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
};

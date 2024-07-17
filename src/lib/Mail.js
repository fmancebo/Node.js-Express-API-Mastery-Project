import nodemailer from "nodemailer";
import mailConfig from "../config/mail";

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });
  }

  async send({ to, subject, text }) {
    try {
      await this.transporter.sendMail({
        from: mailConfig.default.from,
        to,
        subject,
        text,
      });
    } catch (err) {
      console.error("Erro ao enviar e-mail:", err);
      throw err;
    }
  }
}

export default new Mail();

import mailer, { Transporter } from "nodemailer";

export class Mailer {
  private static transporter: Transporter;

  private static setup() {
    this.transporter = mailer.createTransport({
      host: process.env.MAILER_API_HOST,
      port: 587,
      auth: {
        user: process.env.MAILER_API_USERNAME,
        pass: process.env.MAILER_API_PASSWORD,
      },
    });
  }

  public static async send(to: string, subject: string, text: string) {
    if (!this.transporter) {
      this.setup();
    }

    const mailOptions = {
      from: process.env.MAILER_API_USERNAME,
      to,
      subject,
      text,
    };

    return this.transporter.sendMail(mailOptions);
  }
}

import { Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';
import { IContactRequestData } from 'src/types/Email';
import { createTransport } from 'nodemailer';

const { GMAIL_PASS_KEY, GMAIL_USER } = process.env;

console.log(GMAIL_PASS_KEY, GMAIL_USER);

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS_KEY,
      },
    });
  }

  async sendContactRequest(data: IContactRequestData) {
    await this.transporter.sendMail({
      from: 'Renovation app',
      to: data.email,
      subject: 'Renovation request',
      html: `
        <div>
          <h3>Congrats! You have requested renovation withing our service</h3>
          <h3>Additional info you have provided for our managers:</h3>
          <div>${data.additionalInfo}</div>
        </div>`,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';
import { IContactRequestData } from 'src/types/Email';
import { createTransport } from 'nodemailer';

const { GMAIL_PASS_KEY } = process.env;

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'authsmtp.securemail.pro',
      port: 465,
      secure: true,
      auth: {
        user: 'drivenation0@gmail.com',
        pass: GMAIL_PASS_KEY,
      },
    });
  }

  async sendContactRequest(data: IContactRequestData) {
    console.log(data);

    this.transporter.sendMail({
      from: 'Renovation app',
      to: data.email,
      subject: 'Test',
      html: 'Test',
    });
  }
}

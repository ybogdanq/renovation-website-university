import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { IContactRequestData } from 'src/types/Email';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('/contact')
  async sendContactRequest(@Body() body) {
    try {
      const data: IContactRequestData = body.data;
      this.emailService.sendContactRequest(data);

      return 'sent';
    } catch (error) {
      return error;
    }
  }
}

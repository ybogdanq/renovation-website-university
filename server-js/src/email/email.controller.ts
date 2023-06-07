import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Next,
  Post,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { IContactRequestData } from 'src/types/Email';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('/contact')
  async sendContactRequest(@Body() body) {
    try {
      const data: IContactRequestData = body.data;
      await this.emailService.sendContactRequest(data);

      return 'sent';
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.EXPECTATION_FAILED);
    }
  }
}

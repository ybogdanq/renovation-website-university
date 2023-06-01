import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EmailService } from './email/email.service';
import { EmailController } from './email/email.controller';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [PrismaService, EmailService],
})
export class AppModule {}

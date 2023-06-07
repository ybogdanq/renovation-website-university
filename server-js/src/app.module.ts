import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EmailService } from './email/email.service';
import { EmailController } from './email/email.controller';
import { DataMockController } from './data-mock/data-mock.controller';

@Module({
  imports: [],
  controllers: [EmailController, DataMockController],
  providers: [PrismaService, EmailService],
})
export class AppModule {}

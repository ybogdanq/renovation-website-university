import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EmailService } from './email/email.service';
import { EmailController } from './email/email.controller';
import { DataMockController } from './data-mock/data-mock.controller';
import { RenovationController } from './renovation/renovation.controller';
import { RenovationService } from './renovation/renovation.service';

@Module({
  imports: [],
  controllers: [EmailController, DataMockController, RenovationController],
  providers: [PrismaService, EmailService, RenovationService],
})
export class AppModule {}

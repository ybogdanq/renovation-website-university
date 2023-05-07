import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { RenovationService } from './renovation/renovation.service';
import { RenovationController } from './renovation/renovation.controller';

@Module({
  imports: [],
  controllers: [RenovationController],
  providers: [PrismaService, RenovationService],
})
export class AppModule {}

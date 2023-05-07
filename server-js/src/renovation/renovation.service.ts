import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RenovationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    return this.prismaService.renovation.findMany({});
  }
}

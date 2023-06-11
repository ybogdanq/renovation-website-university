import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { renovation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IRenovationAdditionalData } from 'src/types/Renovation';

@Injectable()
export class RenovationService {
  constructor(private prismaService: PrismaService) {}
  async getAllRenovations(): Promise<IRenovationAdditionalData[]> {
    const renovations = await this.prismaService.renovation.findMany({});
    if (renovations.length === 0) {
      throw new HttpException('Data not found...', HttpStatus.BAD_REQUEST);
    }

    const renovationData: IRenovationAdditionalData[] = [];
    for (const renovation of renovations) {
      renovationData.push(await this.serializeRenovation(renovation));
    }

    return renovationData;
  }

  async getRenovationItem(
    renovationId: number,
  ): Promise<IRenovationAdditionalData> {
    console.log(renovationId);

    const renovationItem = await this.prismaService.renovation.findFirst({
      where: {
        id: Number(renovationId),
      },
    });
    if (!renovationItem) {
      throw new HttpException(
        'Renovation not found...',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.serializeRenovation(renovationItem);
  }

  async serializeRenovation(
    renovation: renovation,
  ): Promise<IRenovationAdditionalData> {
    const comments = await this.prismaService.comment.findMany({
      where: {
        renovationId: renovation.id,
      },
    });
    const characteristics = await this.prismaService.characteristic.findMany({
      where: {
        renovationId: renovation.id,
      },
    });
    const rating = await this.prismaService.rating.findFirst({
      where: {
        renovationId: renovation.id,
      },
    });
    return {
      ...renovation,
      comments,
      characteristics: characteristics.map((char) => char.name),
      rating: rating.rating || 0,
    };
  }
}

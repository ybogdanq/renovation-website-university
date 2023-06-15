import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { comment, rating, renovation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  ICommentReq,
  IRenovationAdditionalData,
  IRenovationResponse,
} from 'src/types/Renovation';

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
    renovationId: string,
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
    const rating = await this.prismaService.rating.findMany({
      where: {
        renovationId: renovation.id,
      },
    });
    const avgRating =
      rating.length === 0
        ? 0
        : rating.reduce((acc, ratingItem) => acc + ratingItem.rating, 0) /
          rating.length;
    return {
      ...renovation,
      comments,
      rating: avgRating,
    };
  }

  async addNewComment(
    renovationId: string,
    commentData: ICommentReq,
  ): Promise<comment> {
    const comment = await this.prismaService.comment.create({
      data: {
        userName: commentData.userName,
        renovationId: Number(renovationId),
        message: commentData.message,
      },
    });
    if (!comment) {
      throw new HttpException(
        'Comment could not be created...',
        HttpStatus.BAD_REQUEST,
      );
    }
    return comment;
  }

  async addNewRatingItem(
    renovationId: string,
    ratingCount: number,
  ): Promise<rating> {
    const newRating = await this.prismaService.rating.create({
      data: {
        renovationId: Number(renovationId),
        rating: ratingCount,
      },
    });
    if (!newRating) {
      throw new HttpException(
        'Rating could not be changed...',
        HttpStatus.BAD_REQUEST,
      );
    }
    return newRating;
  }
}

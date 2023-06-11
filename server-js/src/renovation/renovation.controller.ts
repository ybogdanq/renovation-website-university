import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RenovationService } from './renovation.service';
import { ICommentReq } from 'src/types/Renovation';

@Controller('renovation')
export class RenovationController {
  constructor(private renovationService: RenovationService) {}

  @Get('all')
  async getAllRenovations() {
    const renovations = await this.renovationService.getAllRenovations();
    return renovations;
  }

  @Get(':renovationId')
  async getRenovationItem(@Param('renovationId') renovationId: string) {
    const renovationItem = await this.renovationService.getRenovationItem(
      renovationId,
    );
    return renovationItem;
  }

  @Post('/comment/:renovationId')
  async addNewComment(
    @Param('renovationId') renovationId: string,
    @Body() body: { commentData: ICommentReq },
  ) {
    const comment = await this.renovationService.addNewComment(
      renovationId,
      body.commentData,
    );
    return comment;
  }
}

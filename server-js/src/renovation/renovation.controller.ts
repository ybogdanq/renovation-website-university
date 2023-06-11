import { Controller, Get, Param } from '@nestjs/common';
import { RenovationService } from './renovation.service';

@Controller('renovation')
export class RenovationController {
  constructor(private renovationService: RenovationService) {}

  @Get('all')
  async getAllRenovations() {
    const renovations = await this.renovationService.getAllRenovations();
    return renovations;
  }

  @Get(':renovationId')
  async getRenovationItem(@Param('renovationId') renovationId: number) {
    const renovationItem = await this.renovationService.getRenovationItem(
      renovationId,
    );
    return renovationItem;
  }
}

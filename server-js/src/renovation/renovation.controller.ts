import { Controller, Get, Req, Res } from '@nestjs/common';
import { RenovationService } from './renovation.service';

@Controller('renovation')
export class RenovationController {
  constructor(private readonly renovationService: RenovationService) {}

  @Get('/all')
  async getAllRenovations() {
    return this.renovationService.getAll();
  }
}

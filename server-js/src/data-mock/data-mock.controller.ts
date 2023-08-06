import { Controller, Post } from '@nestjs/common';
import { ObjectId } from 'bson';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('data-mock')
export class DataMockController {
  constructor(private prismaService: PrismaService) {}
  @Post('/generate')
  async generateData() {
    const data = await this.prismaService.renovation.create({
      data: {
        name: 'Bedroom room',
        description:
          "Bedroom room's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
        price: 10000,
        characteristics: [
          'dimension drawing',
          'layout with arrangement of furniture and equipment',
          'preliminary selection of finishing materials, furniture and other key design elements',
        ],
        imgsrc: [
          'https://www.ikea.com/images/a-sunny-bedroom-with-a-pax-reinsvoll-wardrobe-combination-by-c68c1de5c96929e60217c67374b9fe73.jpg',
          'https://www.ikea.com/images/link-to-a-comfy-living-room-bedroom-combo-image-of-a-living--1c5291a14e4a20dc32a78493d0f792cf.jpg?f=xxxl',
        ],
      },
    });
    return data;
  }
}

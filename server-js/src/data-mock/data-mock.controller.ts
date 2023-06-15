import { Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('data-mock')
export class DataMockController {
  constructor(private prismaService: PrismaService) {}
  @Post('/generate')
  async generateData() {
    console.log('run');

    const data = await this.prismaService.renovation.create({
      data: {
        name: 'Kids room',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 5000,
        characteristics: [
          'dimension drawing',
          'layout with arrangement of furniture and equipment',
          'preliminary selection of finishing materials, furniture and other key design elements',
          '3D visualization with real-existing key design elements',
          'updated furniture plan with purchase recommendations',
          'dimensional drawings of custom-made furniture',
        ],
        rating: {
          create: {
            rating: 0,
          },
        },
        imgsrc: [
          'https://www.ikea.com/images/a-kids-room-furnished-with-wooden-furntiture-7e0b46f8f82f1bf71cbae1befe0848ec.jpeg?f=xxxl',
          'https://www.ikea.com/ext/ingkadam/m/46335517727d264f/original/PH192188.jpg',
        ],
      },
    });
    return data;
  }
}

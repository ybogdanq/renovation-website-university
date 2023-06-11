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
        name: 'Living room',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 1900,
        comment: {
          create: {
            message:
              'We were very satisfied with the design, all our dreams of a beautiful apartment are a reality, now we are waiting for the completion of the repair.',
          },
        },
        rating: {
          create: {
            rating: 4,
          },
        },
        characteristics: {
          create: { name: '1 category' },
        },
        imgsrc:
          'https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-d80334e03b4e4094d0e02846c7de2e85.jpg',
      },
    });
    return data;
  }
}

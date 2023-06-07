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
        name: 'Kitchen',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 100,
        comment: {
          create: {
            message:
              'We were very satisfied with the design, all our dreams of a beautiful apartment are a reality, now we are waiting for the completion of the repair.',
          },
        },
        rating: {
          create: {
            rating: 5,
          },
        },
        characteristics: {
          create: { name: '1 category' },
        },
        imgsrc:
          'https://media.architecturaldigest.com/photos/6442da171870ecdbed029950/16:9/w_5521,h_3105,c_limit/AVD%20House%20-%20High%20Res-061.jpg',
      },
    });
    return data;
  }
}

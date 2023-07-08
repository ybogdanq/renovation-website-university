import { Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('data-mock')
export class DataMockController {
  constructor(private prismaService: PrismaService) {}
  @Post('/generate')
  async generateData() {
    const data = await this.prismaService.renovation.create({
      data: {
        name: 'Outdoor kitchen',
        description:
          "Kitchen's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
        price: 12000,
        characteristics: [
          'dimension drawing',
          'layout with arrangement of furniture and equipment',
          'preliminary selection of finishing materials, furniture and other key design elements',
          '3D visualization with real-existing key design elements',
        ],
        imgsrc: [
          'https://www.ikea.com/images/a-patio-set-up-for-spring-with-a-grillskaer-charcoal-grill-a-76cb1f6bf76931e4339ce331f906bce1.jpg?f=s',
          'https://www.ikea.com/images/a-barbeuqe-and-trolleys-with-various-food-and-cooking-utensi-87c121fa56e2c98f55060fd25c384dd3.jpeg?f=s',
        ],
      },
    });
    return data;
  }
}

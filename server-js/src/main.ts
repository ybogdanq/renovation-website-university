import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.enableCors({
    origin: process.env.CLIENT_APP,
    credentials: true,
  });
  await app.listen(PORT);
  console.log('App runs on PORT: ' + PORT);
}
bootstrap();

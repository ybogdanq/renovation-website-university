'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = require('@nestjs/core');
const app_module_1 = require('./app.module');
const prisma_service_1 = require('./prisma/prisma.service');
const PORT = process.env.PORT || 5000;
async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule);
  const prismaService = app.get(prisma_service_1.PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.enableCors({
    origin: process.env.CLIENT_APP,
    credentials: true,
  });
  await app.listen(PORT);
  console.log('App runs on PORT: ' + PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map

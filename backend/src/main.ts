import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { frontendMiddleware } from './frontend.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(frontendMiddleware);
  await app.listen(80);
}
bootstrap();

// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  // Cho phép FE localhost truy cập
  app.enableCors({
    origin: 'http://localhost:3000', // hoặc '*'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: '*',
  });

  await app.listen(process.env.PORT || 3020);
}
bootstrap();

// @ts-ignore
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const urlPORT = 'http://localhost:5000/api';
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api')

  await app.listen(PORT, () =>
    console.log(`Сервер прослушивает порт: ${PORT} на хосте - ${urlPORT}`),
  );
}

start();

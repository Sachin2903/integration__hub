import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port=8444
  await app.listen(port);
  console.log("server has been started on port",port)
}
bootstrap();

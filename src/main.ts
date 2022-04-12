import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import tracer from 'dd-trace';

async function bootstrap() {
  tracer.init({
    logInjection: true,
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

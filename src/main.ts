import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  // invocar essa função useContainer, que vem do class-validator, para definir quem vai fazer
  //injeção de dependência dentro do contexto do class-validator (que corre por fora do container do Nest)
  // neste caso o appModule que é o próprio Nest
  await app.listen(3000);
}
bootstrap();

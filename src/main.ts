import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from 'src/common/filter/global.exception.filter';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
      .setTitle('Chat App')
      .setDescription('The Chat App API description')
      .setVersion('0.1')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, );

  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();

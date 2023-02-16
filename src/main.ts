import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from 'src/common/filter/global.exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserResponse } from './common/response/user/user.response';

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

  const swaggerDocument = SwaggerModule.createDocument(app, config, {
    extraModels: [UserResponse],
  });

  // const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, swaggerDocument);

  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();

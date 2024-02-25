import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  const logger = new Logger(NestApplication.name);

  app.disable('x-powered-by');

  const config = new DocumentBuilder()
  .setTitle('NestJS Timeout')
  .setDescription('Service to demonstrate timeout via interceptors in NestJS')
  .setVersion('1.0.0')
  .setContact('Swagata Chaudhuri', 'https://github.com/swagatachaudhuri', '')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT') || 4000;

  await app.listen(port);
  logger.log(`Application started and listening on ${port}`);
}
bootstrap();

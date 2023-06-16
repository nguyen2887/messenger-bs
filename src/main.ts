import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main (main.ts');
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'));
  // const clientPort = parseInt(configService.get('CLIENT_PORT'));

  app.enableCors({ origin: '*' });

  // app.useWebSocketAdapter(new SocketIOAdapter(app, configService));

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  logger.log(`Server running on port ${port}`);
}
bootstrap();

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mongodb',
        host: configService.get('MONGO_DB_HOST'),
        port: configService.get('MONGO_DB_PORT'),
        username: configService.get('MONGO_DB_USERNAME'),
        password: configService.get('MONGO_DB_PASSWORD'),
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
        logger: 'advanced-console',
      }),
    }),
  ],
})
export class MongoModule {}

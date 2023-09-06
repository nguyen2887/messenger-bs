import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { ModelsModule } from './models/models.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [AppConfigModule, ProvidersModule, ModelsModule],
})
export class AppModule {}

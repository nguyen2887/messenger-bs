import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversationSchema } from './schemas/conversation.schema';
import { ConversationGateway } from './conversation.gateway';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: 'Conversation',
        schema: ConversationSchema,
      },
    ]),
  ],
  providers: [ConversationService, ConversationGateway],
  controllers: [ConversationController],
})
export class ConversationModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UsersModule, ChatsModule, MessagesModule],
})
export class ModelsModule {}

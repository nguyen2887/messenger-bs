import { Injectable } from '@nestjs/common';
import { Chat } from './entities/chat.entity';
import { ChatsRepository } from './chats.repository';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class ChatsService {
  constructor(private chatsRepository: ChatsRepository) {}

  getAllChatsByUser(userId: string): Promise<Chat[]> {
    return this.chatsRepository.find({
      where: {
        participants: new ObjectId(userId),
      },
    });
  }

  createChat(createChatDto: CreateChatDto) {
    return this.chatsRepository.createChat(createChatDto);
  }

  updateChat(chatId: string, updateChatDto: UpdateChatDto) {
    return this.chatsRepository.updateChat(chatId, updateChatDto);
  }
}

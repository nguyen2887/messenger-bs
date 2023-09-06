import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
import { ObjectId } from 'mongodb';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatsRepository extends Repository<Chat> {
  private logger = new Logger('ChatsRepository');

  constructor(dataSource: DataSource) {
    super(Chat, dataSource.createEntityManager());
  }

  async createChat(createChatDto: CreateChatDto) {
    const { participants } = createChatDto;

    const chat = this.create({ participants });

    try {
      const chat2 = await this.save(chat);

      console.log(chat2);
    } catch (error) {
      this.logger.error(error);

      throw new BadGatewayException(error);
    }
  }

  async updateChat(chatId: string, updateChatDto: UpdateChatDto) {
    const { message } = updateChatDto;

    try {
      console.log(chatId, message);

      const chat = await this.findOneBy({
        _id: new ObjectId('64f83d1a736c78022fd03679'),
      });

      console.log(chat);

      if (!chat) {
        throw 'Chat not found';
      }

      await this.save(chat);
    } catch (error) {
      this.logger.error(error);

      throw new BadGatewayException(error);
    }
  }
}

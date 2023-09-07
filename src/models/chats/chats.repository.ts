import {
  BadGatewayException,
  Injectable,
  Logger,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
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

  async getChatById(id: string): Promise<Chat> {
    const chat = await this.findOneBy({ _id: new ObjectId(id) });

    if (!chat) throw new NotFoundException(`Chat ${id} not found`);

    return chat;
  }

  createChat(createChatDto: CreateChatDto): Promise<Chat> {
    const { participants } = createChatDto;

    const chat = this.create({ participants });

    try {
      return this.save(chat);
    } catch (error) {
      this.logger.error(error);

      throw new BadGatewayException(error);
    }
  }

  async updateChat(id: string, updateChatDto: UpdateChatDto): Promise<Chat> {
    const { is_group, name, participants } = updateChatDto;

    const chat = await this.getChatById(id);

    chat.is_group = is_group;

    if (name) {
      if (chat.is_group) {
        chat.name = name;
      } else {
        throw new BadRequestException(
          'Only chat, which is group, can be named',
        );
      }
    }

    chat.participants = participants.map((stringId) => new ObjectId(stringId));

    try {
      return this.save(chat);
    } catch (error) {
      this.logger.error(error);

      throw new BadGatewayException(error);
    }
  }
}

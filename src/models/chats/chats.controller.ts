import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { Chat } from './entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('/:userId')
  getAllChatsByUser(@Param('userId') userId: string): Promise<Chat[]> {
    return this.chatsService.getAllChatsByUser(userId);
  }

  @Post()
  createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatsService.createChat(createChatDto);
  }

  @Put('/:chatId')
  updateChat(
    @Param('chatId') chatId: string,
    @Body() updateChatDto: UpdateChatDto,
  ) {
    return this.chatsService.updateChat(chatId, updateChatDto);
  }
}

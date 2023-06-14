import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { AuthGuard } from '@nestjs/passport';
import { Conversation } from './schemas/conversation.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('conversation')
export class ConversationController {
  constructor(private conversationService: ConversationService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllConversations(
    @Query() query: ExpressQuery,
  ): Promise<Conversation[]> {
    return this.conversationService.findAll(query);
  }
}

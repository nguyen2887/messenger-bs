import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './schemas/message.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllMessages(@Query() query: ExpressQuery): Promise<Message[]> {
    return this.messageService.findAll(query);
  }
}

import {
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { AuthGuard } from '@nestjs/passport';
import { Conversation } from './schemas/conversation.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';

const PATH = 'conversation';

@ApiTags(PATH)
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Controller(PATH)
export class ConversationController {
  constructor(private conversationService: ConversationService) {}

  @ApiQuery({ name: 'page', type: 'string', required: false })
  @Get()
  async getAll(@Query() query: ExpressQuery): Promise<Conversation[]> {
    return this.conversationService.findAll(query);
  }

  @Post()
  async create(@Body() body: CreateConversationDto): Promise<Conversation> {
    return this.conversationService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateConversationDto) {
    return this.conversationService.updateById(id, body);
  }
}

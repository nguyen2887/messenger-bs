import {
  Controller,
  Get,
  Query,
  UseGuards,
  Post,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './schemas/message.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateMessageDto } from './dto/update-message.dto';

const PATH = 'message';

@ApiTags(PATH)
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Controller(PATH)
export class MessageController {
  constructor(private messageService: MessageService) {}

  @ApiQuery({ name: 'page', type: 'string', required: false })
  @Get()
  async getAll(@Query() query: ExpressQuery): Promise<Message[]> {
    return this.messageService.findAll(query);
  }

  @Post()
  async create(@Body() body: CreateMessageDto) {
    return this.messageService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateMessageDto) {
    return this.messageService.updateById(id, body);
  }
}

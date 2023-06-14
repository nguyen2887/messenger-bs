import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Conversation } from './schemas/conversation.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name)
    private conversationModel: mongoose.Model<Conversation>,
  ) {}

  async findAll(query: Query): Promise<Conversation[]> {
    const resPerPage = 15;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    return await this.conversationModel.find().limit(resPerPage).skip(skip);
  }

  async create(conversation: Conversation): Promise<Conversation> {
    return await this.conversationModel.create(conversation);
  }

  async updateById(
    id: string,
    conversation: Conversation,
  ): Promise<Conversation> {
    return await this.conversationModel.findByIdAndUpdate(id, conversation, {
      new: true,
      runValidators: true,
    });
  }
}

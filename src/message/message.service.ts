import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Message } from './schemas/message.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name)
    private messageModel: mongoose.Model<Message>,
  ) {}

  async findAll(query: Query): Promise<Message[]> {
    const resPerPage = 20;
    const currentPage = Number(query.page);
    const skip = resPerPage * (currentPage - 1);

    return await this.messageModel.find().limit(resPerPage).skip(skip);
  }

  async create(item: Message): Promise<Message> {
    return await this.messageModel.create(item);
  }

  async updateById(id: string, item: Message): Promise<Message> {
    return await this.messageModel.findByIdAndUpdate(id, item, {
      new: true,
      runValidators: true,
    });
  }
}

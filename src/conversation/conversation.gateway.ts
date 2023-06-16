import { Query, Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { ConversationService } from './conversation.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Server } from 'socket.io';
import { OnGatewayInit, OnGatewayConnection } from '@nestjs/websockets';
import { Conversation } from './schemas/conversation.schema';

@WebSocketGateway({
  //   namespace: 'conversation',
  cors: {
    origin: '*',
  },
})
export class ConversationGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(ConversationGateway.name);

  constructor(private readonly conversationService: ConversationService) {}

  afterInit() {
    this.logger.log('Conversation Gateway initialized!');
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log('New connection detected', client, 'with args', args);
  }

  @SubscribeMessage('getAllConversations')
  getAll(@Query() query: ExpressQuery): Promise<Conversation[]> {
    return this.conversationService.findAll(query);
  }
}

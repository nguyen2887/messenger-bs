import { Message } from '../../messages/entities/message.entity';

export class UpdateChatDto {
  //   @IsArray()
  //   members: string[];

  message: Message;
}

import { Message } from '../entities/message.entity';

export class UpdateChatDto {
  //   @IsArray()
  //   members: string[];

  message: Message;
}

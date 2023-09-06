import { IsArray, IsNotEmpty, ArrayMinSize } from 'class-validator';

export class CreateChatDto {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(2)
  participants: string[];
}

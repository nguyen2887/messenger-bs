import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly conversation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly sender: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly receiver: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly content: string;
}

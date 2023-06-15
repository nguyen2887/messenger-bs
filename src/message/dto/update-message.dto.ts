import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMessageDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly conversation: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly sender: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly receiver: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly content: string;
}

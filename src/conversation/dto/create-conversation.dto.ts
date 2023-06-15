import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateConversationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  readonly users: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  readonly archivedBy: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  readonly unreadBy: string[];
}

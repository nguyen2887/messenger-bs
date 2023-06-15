import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional } from 'class-validator';

export class UpdateConversationDto {
  @ApiProperty()
  @IsOptional()
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

import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateChatDto {
  @IsArray()
  @ArrayMinSize(2)
  @IsOptional()
  participants: string[];

  @IsString()
  @IsOptional()
  name: string;

  @IsBoolean()
  @IsOptional()
  is_group: boolean;
}

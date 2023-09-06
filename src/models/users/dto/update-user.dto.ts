import {
  IsBoolean,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUrl,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username: string;

  @IsStrongPassword()
  @IsOptional()
  password: string;

  @IsUrl()
  @IsOptional()
  avatar: string;

  @IsBoolean()
  @IsOptional()
  is_online: boolean;
}

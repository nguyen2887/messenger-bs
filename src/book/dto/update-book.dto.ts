import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from 'src/auth/schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly price: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly author: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Category, { message: 'Please enter correct category ' })
  readonly category: Category;

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/schemas/user.schema';
import { ApiBearerAuth, ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @ApiQuery({ name: 'keyword', type: 'string', required: false })
  @ApiQuery({ name: 'page', type: 'string', required: false })
  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
    return this.bookService.findAll(query);
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @ApiBearerAuth()
  @Post()
  @UseGuards(AuthGuard())
  async createBook(
    @Body() book: CreateBookDto,
    @Req() req: { user: User },
  ): Promise<Book> {
    return this.bookService.create(book, req.user);
  }

  @ApiBearerAuth()
  @Put(':id')
  @UseGuards(AuthGuard())
  async updateBook(
    @Param('id') id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateById(id, book);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteById(id);
  }
}

import {
  Injectable,
  Logger,
  BadGatewayException,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersRepository extends Repository<User> {
  private logger = new Logger('UsersRepository');

  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.findOneBy({ _id: new ObjectId(id) });

    if (!user) throw new NotFoundException(`User ${id} not found`);

    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const user = this.create(createUserDto);

    try {
      await this.save(user);
    } catch (error) {
      this.logger.error(error);

      throw new BadGatewayException(error);
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    let user = await this.getUserById(id);

    user = { ...user, ...updateUserDto };

    try {
      await this.save(user);
    } catch (error) {
      this.logger.error(error);

      throw new BadGatewayException(error);
    }
  }
}

import { Injectable, Logger, BadGatewayException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository extends Repository<User> {
  private logger = new Logger('UsersRepository');

  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(): Promise<void> {
    const user = this.create({ firstName: 'Huy', lastName: 'Nguyen' });

    try {
      await this.save(user);
    } catch (error) {
      this.logger.error(error);

      throw new BadGatewayException(error);
    }
  }
}

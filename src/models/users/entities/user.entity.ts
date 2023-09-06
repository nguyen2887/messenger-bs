import { BaseMongo } from 'src/common/base-mongo.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends BaseMongo {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string = '';

  @Column()
  is_online: boolean = false;
}

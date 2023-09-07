import { BaseMongo } from 'src/common/base-mongo.entity';
import { Entity, Column, ObjectId } from 'typeorm';

@Entity()
export class Chat extends BaseMongo {
  @Column()
  participants: ObjectId[];

  @Column()
  name: string = '';

  @Column()
  is_group: boolean = false;
}

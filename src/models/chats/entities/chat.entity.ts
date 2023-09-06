import { BaseMongo } from 'src/common/base-mongo.entity';
import { Entity, Column, ObjectId } from 'typeorm';

@Entity()
export class Chat extends BaseMongo {
  @Column()
  participants: ObjectId[];

  @Column({ default: '' })
  name: string;

  @Column({ default: false })
  is_group: boolean;
}

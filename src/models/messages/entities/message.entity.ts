import { BaseMongo } from 'src/common/base-mongo.entity';
import { Entity, Column, ObjectId } from 'typeorm';

@Entity()
export class Message extends BaseMongo {
  @Column()
  chatId: ObjectId;

  @Column()
  sender: ObjectId;

  @Column()
  text: string;
}

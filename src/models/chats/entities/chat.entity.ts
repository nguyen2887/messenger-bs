import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class Chat {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  members: string[];

  @Column(() => Message)
  messages: Message[];
}

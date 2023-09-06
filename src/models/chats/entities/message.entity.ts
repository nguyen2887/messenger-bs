import { Entity, Column } from 'typeorm';

@Entity()
export class Message {
  @Column()
  sender: string;

  @Column()
  content: string;
}

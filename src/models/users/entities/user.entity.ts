import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}

import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Conversation extends Document {
  @Prop()
  users: string[];

  @Prop()
  isGroup: boolean;

  @Prop()
  read: boolean[];

  @Prop()
  removers: string[];
}

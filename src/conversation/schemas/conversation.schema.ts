import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Conversation extends Document {
  @Prop()
  sender: string;

  @Prop()
  receiver: string;

  @Prop()
  content: string;

  @Prop()
  unsend: boolean;

  @Prop()
  removers: string[];
}

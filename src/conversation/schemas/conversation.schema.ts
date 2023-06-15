import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Conversation {
  @Prop()
  users: string[];

  @Prop({ default: [] })
  archivedBy: string[];

  @Prop({ default: [] })
  unreadBy: string[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);

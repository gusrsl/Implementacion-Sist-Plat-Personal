import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type GymDocument = HydratedDocument<Gym>;

@Schema()
export class Gym {
  @Prop({ type: Types.ObjectId, auto: true })
  GymID: string;

  @Prop({ required: true })
  Nombre: string;

  @Prop({ required: true })
  Ubicación: string;
}

export const GymSchema = SchemaFactory.createForClass(Gym);
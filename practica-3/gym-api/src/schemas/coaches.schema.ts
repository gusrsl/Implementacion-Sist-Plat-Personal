import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoachesDocument = HydratedDocument<Coaches>;

@Schema()
export class Coaches {
  @Prop()
  CoachID: string;

  @Prop()
  Nombre: string;

  @Prop()
  Especialidad: string;

  @Prop({ type: String, ref: 'Gym' })
  GymID: string;

  @Prop({ type: String, ref: 'Membresia' })
  MembresiaID: string;
}

export const CoachSchema = SchemaFactory.createForClass(Coaches);
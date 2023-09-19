import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EquiposDocument = HydratedDocument<Equipos>;

@Schema()
export class Equipos {
  @Prop({ required: true, unique: true })
  EquipoID: string;

  @Prop({ required: true })
  Nombre: string;

  @Prop({ required: true })
  Tipo: string;

  @Prop({ type: String, ref: 'Gym', required: true })
  GymID: string;

  @Prop({ type: String, ref: 'Clase', required: true })
  ClaseID: string;
}

export const EquipoSchema = SchemaFactory.createForClass(Equipos);
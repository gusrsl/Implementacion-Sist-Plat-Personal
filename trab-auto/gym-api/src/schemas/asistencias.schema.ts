import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AsistenciaDocument = Document & Asistencia;

@Schema()
export class Asistencia {
  @Prop({ required: true, unique: true })
  AsistenciaID: string;

  @Prop({ type: Types.ObjectId, ref: 'Cliente', required: true })
  ClienteID: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Clase', required: true })
  ClaseID: Types.ObjectId;

  @Prop({ required: true })
  Fecha: Date;

  @Prop({ required: true })
  Hora: String;

  @Prop({ type: Types.ObjectId, ref: 'Gym', required: true })
  GymID: Types.ObjectId;
}

export const AsistenciaSchema = SchemaFactory.createForClass(Asistencia);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ClientesDocument = HydratedDocument<Clientes>;

@Schema()
export class Clientes {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  fechaNacimiento: Date;

  @Prop({ type: Types.ObjectId, ref: 'membresias' })  // Referencia al modelo Membresia
  membresiaId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'coaches' })  // Referencia al modelo Coach
  coachId: Types.ObjectId;
}

export const ClientesSchema = SchemaFactory.createForClass(Clientes);
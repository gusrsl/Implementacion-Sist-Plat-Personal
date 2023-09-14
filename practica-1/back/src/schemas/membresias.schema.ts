import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MembresiasDocument = HydratedDocument<Membresia>;

@Schema()
export class Membresia {
    @Prop({ required: true, unique: true })
    membresiaID: string;

    @Prop({ required: true })
    tipo: string;

    @Prop({ required: true })
    costo: number;

    @Prop({ required: true })
    duracion: number; // Duración en días

    @Prop({ type: Types.ObjectId, ref: 'Gym' })
    gymID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Equipo' })
    equipoID: Types.ObjectId;
}

export const MembresiaSchema = SchemaFactory.createForClass(Membresia);
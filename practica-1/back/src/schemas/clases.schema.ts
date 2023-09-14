import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ClaseDocument = Document & Clase;

@Schema()
export class Clase {
    
    @Prop({ required: true, unique: true })
    claseID: string;

    @Prop({ required: true })
    nombre: string;

    @Prop({ type: Types.ObjectId, ref: 'Coach' })
    coachID: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Membresia' })
    membresiaID: Types.ObjectId;

    @Prop({ required: true })
    hora: Date;

    @Prop({ required: true })
    duracion: number; // Duración en minutos

    @Prop({ required: true })
    cupoMaximo: number;
}

export const ClaseSchema = SchemaFactory.createForClass(Clase);
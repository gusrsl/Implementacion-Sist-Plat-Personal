import { Types } from 'mongoose';

export class CreateMembresiaDto {
  readonly membresiaID: string;
  readonly tipo: string;
  readonly costo: number;
  readonly duracion: number; // Duración en días
  readonly gymID: Types.ObjectId;
  readonly equipoID: Types.ObjectId;
}
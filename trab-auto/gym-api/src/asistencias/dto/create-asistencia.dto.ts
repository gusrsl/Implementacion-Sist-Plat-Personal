import { Types } from 'mongoose';

export class CreateAsistenciaDto {
  readonly AsistenciaID: string;
  readonly ClienteID: Types.ObjectId;
  readonly ClaseID: Types.ObjectId;
  readonly Fecha: Date;
  readonly Hora: string;
  readonly GymID: Types.ObjectId;
}

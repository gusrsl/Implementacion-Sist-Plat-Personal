import { Module } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { AsistenciasController } from './asistencias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asistencia, AsistenciaSchema } from 'src/membresias/entities/asistencias.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Asistencia.name, schema: AsistenciaSchema }])
  ],
  controllers: [AsistenciasController],
  providers: [AsistenciasService],
})
export class AsistenciasModule {}

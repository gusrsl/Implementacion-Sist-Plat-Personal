import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipoSchema, Equipos } from '../schemas/equipos.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Utiliza la variable de entorno MONGODB_URI
    MongooseModule.forFeature([{ name: Equipos.name, schema: EquipoSchema }])
  ],
  controllers: [EquiposController],
  providers: [EquiposService],
})
export class EquiposModule {}

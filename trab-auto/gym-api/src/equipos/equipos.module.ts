import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipoSchema, Equipos } from '../schemas/equipos.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Equipos.name, schema: EquipoSchema }])
  ],
  controllers: [EquiposController],
  providers: [EquiposService],
})
export class EquiposModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';

import { MongooseModule } from '@nestjs/mongoose';
import { Clientes, ClientesSchema } from './schemas/clientes.schema';
import { CoachesModule } from './coaches/coaches.module';
import { MembresiasModule } from './membresias/membresias.module';
import { GymModule } from './gym/gym.module';
import { ClasesModule } from './clases/clases.module';
import { EquiposModule } from './equipos/equipos.module';
import { AsistenciasModule } from './asistencias/asistencias.module';

@Module({
  imports: [
    ClientesModule,
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Clientes.name, schema: ClientesSchema }]),
    CoachesModule,
    MembresiasModule,
    GymModule,
    ClasesModule,
    EquiposModule,
    AsistenciasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

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
    MongooseModule.forRoot(process.env.MONGODB_URI),
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

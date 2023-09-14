import { Module } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Clase, ClaseSchema } from 'src/schemas/clases.schema';
import { CoachesModule } from 'src/coaches/coaches.module';
import { MembresiasModule } from 'src/membresias/membresias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://gustavorod2001:53AuxBlEEnXDMFdJjl0ZBQeV74pZcqWdfA9PtQCX9qT8fwlayHxKGqMgELQLwR4e8loBTucJxJzEACDbZnuLLQ==@gustavorod2001.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gustavorod2001@'),
    MongooseModule.forFeature([{ name: Clase.name, schema: ClaseSchema }]),
    CoachesModule, 
    MembresiasModule
  ],
  controllers: [ClasesController],
  providers: [ClasesService, CoachesModule, MembresiasModule],
})
export class ClasesModule {}

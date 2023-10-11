import { Module } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Clase, ClaseSchema } from '../schemas/clases.schema';
import { CoachesModule } from 'src/coaches/coaches.module';
import { MembresiasModule } from 'src/membresias/membresias.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Utiliza la variable de entorno MONGODB_URI
    MongooseModule.forFeature([{ name: Clase.name, schema: ClaseSchema }]),
    CoachesModule, 
    MembresiasModule
  ],
  controllers: [ClasesController],
  providers: [ClasesService, CoachesModule, MembresiasModule],
})
export class ClasesModule {}

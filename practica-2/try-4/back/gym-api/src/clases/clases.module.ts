import { Module } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Clase, ClaseSchema } from 'src/schemas/clases.schema';
import { CoachesModule } from 'src/coaches/coaches.module';
import { MembresiasModule } from 'src/membresias/membresias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Clase.name, schema: ClaseSchema }]),
    CoachesModule, 
    MembresiasModule
  ],
  controllers: [ClasesController],
  providers: [ClasesService, CoachesModule, MembresiasModule],
})
export class ClasesModule {}

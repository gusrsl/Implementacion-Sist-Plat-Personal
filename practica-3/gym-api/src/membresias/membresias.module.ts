import { Module } from '@nestjs/common';
import { MembresiasService } from './membresias.service';
import { MembresiasController } from './membresias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipos  } from '../schemas/equipos.schema';
import { GymModule } from 'src/gym/gym.module';
import { Membresia, MembresiaSchema } from '../schemas/membresias.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Utiliza la variable de entorno MONGODB_URI
    MongooseModule.forFeature([{ name: Membresia.name, schema: MembresiaSchema }]),
    GymModule,
  ],
  controllers: [MembresiasController],
  providers: [MembresiasService],
  exports: [MembresiasModule],
})
export class MembresiasModule {}

import { Module } from '@nestjs/common';
import { MembresiasService } from './membresias.service';
import { MembresiasController } from './membresias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Membresia, MembresiaSchema } from 'src/schemas/membresias.schema';
import { GymModule } from 'src/gym/gym.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://gustavorod2001:53AuxBlEEnXDMFdJjl0ZBQeV74pZcqWdfA9PtQCX9qT8fwlayHxKGqMgELQLwR4e8loBTucJxJzEACDbZnuLLQ==@gustavorod2001.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gustavorod2001@'),
    MongooseModule.forFeature([{ name: Membresia.name, schema: MembresiaSchema }]),
    GymModule,
  ],
  controllers: [MembresiasController],
  providers: [MembresiasService],
  exports: [MembresiasModule],
})
export class MembresiasModule {}

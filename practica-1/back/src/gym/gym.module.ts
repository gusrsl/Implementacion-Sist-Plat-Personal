import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymController } from './gym.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gym, GymSchema } from 'src/schemas/gym.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://gustavorod2001:53AuxBlEEnXDMFdJjl0ZBQeV74pZcqWdfA9PtQCX9qT8fwlayHxKGqMgELQLwR4e8loBTucJxJzEACDbZnuLLQ==@gustavorod2001.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gustavorod2001@'),
    MongooseModule.forFeature([{ name: Gym.name, schema: GymSchema }])
  ],
  controllers: [GymController],
  providers: [GymService],
})
export class GymModule {}

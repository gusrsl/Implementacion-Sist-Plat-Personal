import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymController } from './gym.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gym, GymSchema } from '../schemas/gym.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Utiliza la variable de entorno MONGODB_URI
    MongooseModule.forFeature([{ name: Gym.name, schema: GymSchema }])
  ],
  controllers: [GymController],
  providers: [GymService],
})
export class GymModule {}

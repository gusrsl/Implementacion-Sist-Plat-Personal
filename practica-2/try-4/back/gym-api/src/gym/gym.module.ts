import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymController } from './gym.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gym, GymSchema } from 'src/schemas/gym.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://gustavorod2001-server:1zVA916237Zy1QRJTXtma4b4jZ8cU1MhH28jIKOLC1H40oR8JWpkMrPoEiWhpUMHC5CP35uucmbOACDbbw4dcQ%3D%3D@gustavorod2001-server.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@gustavorod2001-server@'),
    MongooseModule.forFeature([{ name: Gym.name, schema: GymSchema }])
  ],
  controllers: [GymController],
  providers: [GymService],
})
export class GymModule {}

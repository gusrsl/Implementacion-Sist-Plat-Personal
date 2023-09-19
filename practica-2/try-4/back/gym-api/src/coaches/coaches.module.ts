import { Module } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CoachesController } from './coaches.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoachSchema, Coaches } from '../schemas/coaches.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Coaches.name, schema: CoachSchema }])
  ],
  controllers: [CoachesController],
  providers: [CoachesService],
  exports: [CoachesModule],
})
export class CoachesModule {}

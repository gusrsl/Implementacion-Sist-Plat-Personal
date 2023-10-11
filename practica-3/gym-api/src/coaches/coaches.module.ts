import { Module } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CoachesController } from './coaches.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoachSchema, Coaches } from '../schemas/coaches.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Utiliza la variable de entorno MONGODB_URI
    MongooseModule.forFeature([{ name: Coaches.name, schema: CoachSchema }])
  ],
  controllers: [CoachesController],
  providers: [CoachesService],
  exports: [CoachesModule],
})
export class CoachesModule {}

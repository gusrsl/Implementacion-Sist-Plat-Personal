import { Module } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CoachesController } from './coaches.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoachSchema, Coaches } from 'src/schemas/coaches.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://gustavorod2001:53AuxBlEEnXDMFdJjl0ZBQeV74pZcqWdfA9PtQCX9qT8fwlayHxKGqMgELQLwR4e8loBTucJxJzEACDbZnuLLQ==@gustavorod2001.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gustavorod2001@'),
    MongooseModule.forFeature([{ name: Coaches.name, schema: CoachSchema }])
  ],
  controllers: [CoachesController],
  providers: [CoachesService],
  exports: [CoachesModule],
})
export class CoachesModule {}

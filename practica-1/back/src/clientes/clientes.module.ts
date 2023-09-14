import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Clientes, ClientesSchema } from 'src/schemas/clientes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://gustavorod2001:53AuxBlEEnXDMFdJjl0ZBQeV74pZcqWdfA9PtQCX9qT8fwlayHxKGqMgELQLwR4e8loBTucJxJzEACDbZnuLLQ==@gustavorod2001.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@gustavorod2001@'),
    MongooseModule.forFeature([{ name: Clientes.name, schema: ClientesSchema }])
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}

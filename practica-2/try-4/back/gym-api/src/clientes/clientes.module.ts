import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Clientes, ClientesSchema } from '../schemas/clientes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavoemilio:admin123@cluster0.fvrbdh3.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Clientes.name, schema: ClientesSchema }])
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}

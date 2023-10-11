import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Clientes, ClientesSchema } from '../schemas/clientes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // Utiliza la variable de entorno MONGODB_URI
    MongooseModule.forFeature([{ name: Clientes.name, schema: ClientesSchema }])
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}

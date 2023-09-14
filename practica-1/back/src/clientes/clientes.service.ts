import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Clientes } from 'src/schemas/clientes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClientesService {


  constructor(@InjectModel(Clientes.name) private clientesModel: Model<Clientes>) {}


   async create(createClienteDto: CreateClienteDto): Promise<Clientes> {
    const createdCliente = new this.clientesModel(createClienteDto);
    return createdCliente.save();
  }

  async findAll() {
    return this.clientesModel.find();
  }

  async findOne(id_cliente: string) {
    const cliente = await this.clientesModel.findById(id_cliente).exec();
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id_cliente} no encontrado.`);
    }
    return cliente;
}

async update(id_cliente: string, updateClienteDto: UpdateClienteDto): Promise<Clientes> {
  const updatedCliente = await this.clientesModel
      .findByIdAndUpdate(id_cliente, updateClienteDto, { new: true })
      .exec();

  if (!updatedCliente) {
      throw new NotFoundException(`Cliente con ID ${id_cliente} no encontrado.`);
  }
  return updatedCliente;
}

  async deleteById(id: string): Promise<{ message: string }> {
    const result = await this.clientesModel.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
        throw new NotFoundException(`Cliente con ID ${id} no encontrado.`);
    }

    return { message: 'Cliente eliminado con éxito' };
}
}

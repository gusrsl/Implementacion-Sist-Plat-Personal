import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Clientes } from '../schemas/clientes.schema';
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
    return this.clientesModel.find().exec();
  }

  async findOne(nombre_cliente: string) {
    const cliente = await this.clientesModel.findOne({ nombre_cliente: nombre_cliente }).exec();
    if (!cliente) {
      throw new NotFoundException(`Cliente con nombre ${nombre_cliente} no encontrado.`);
    }
    return cliente;
  }

  async updateByNombre(nombre_cliente: string, updateData: Partial<Clientes>): Promise<Clientes> {
    const updatedCliente = await this.clientesModel.findOneAndUpdate({ nombre_cliente: nombre_cliente }, updateData, { new: true }).exec();
    
    if (!updatedCliente) {
      throw new NotFoundException(`Cliente con nombre ${nombre_cliente} no encontrado.`);
    }
  
    return updatedCliente;
  }

  async deleteByNombre(nombre: string): Promise<{ message: string }> {
    const result = await this.clientesModel.deleteOne({ nombre_cliente: nombre }).exec();
    
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Cliente con nombre ${nombre} no encontrado.`);
    }
  
    return { message: 'Cliente eliminado con éxito' };
  }
}

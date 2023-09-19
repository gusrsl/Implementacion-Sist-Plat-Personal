import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Clientes } from '../schemas/clientes.schema';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':nombre_cliente')
  async findOne(@Param('nombre_cliente') nombre_cliente: string): Promise<Clientes> {
    return this.clientesService.findOne(nombre_cliente);
  }

  @Patch(':nombre_cliente')
  async updateByNombre(@Param('nombre_cliente') nombre_cliente: string,
    @Body() updateData: Partial<Clientes> ): Promise<Clientes> {
    return this.clientesService.updateByNombre(nombre_cliente, updateData);
  }

  @Delete(':nombre_cliente')
  async deleteByNombre(@Param('nombre_cliente') nombre_cliente: string): Promise<{ message: string }> {
  return this.clientesService.deleteByNombre(nombre_cliente);
}
}

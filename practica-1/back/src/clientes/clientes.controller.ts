import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Clientes } from 'src/schemas/clientes.schema';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Put(':id')
    async update(
        @Param('id') id_cliente: string,
        @Body() updateClienteDto: UpdateClienteDto
    ): Promise<Clientes> {
        return this.clientesService.update(id_cliente, updateClienteDto);
    }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id_cliente')
    async getClienteById(@Param('id_cliente') id_cliente: string) {
        const cliente = await this.clientesService.findOne(id_cliente);
        if (!cliente) {
            throw new NotFoundException(`Cliente con ID ${id_cliente} no encontrado.`);
        }
        return cliente;
    }

  // @Patch(':nombre_cliente')
  // async updateByNombre(@Param('nombre_cliente') nombre_cliente: string,
  //   @Body() updateData: Partial<Clientes> ): Promise<Clientes> {
  //   return this.clientesService.updateByNombre(nombre_cliente, updateData);
  // }

  @Delete(':id')
    async deleteClienteById(@Param('id') id: string) {
        return this.clientesService.deleteById(id);
    }

}

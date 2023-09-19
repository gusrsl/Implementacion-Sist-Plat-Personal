import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembresiasService } from './membresias.service';
import { CreateMembresiaDto } from './dto/create-membresia.dto';
import { UpdateMembresiaDto } from './dto/update-membresia.dto';
import { Membresia } from '../schemas/membresias.schema';

@Controller('membresias')
export class MembresiasController {
  constructor(private readonly membresiasService: MembresiasService) {}

  @Post()
  async create(@Body() createMembresiaDto: CreateMembresiaDto) {
    return this.membresiasService.create(createMembresiaDto);
  }

  @Get()
  async findAll() {
    return this.membresiasService.findAll();
  }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Membresia> {
        return this.membresiasService.findOne(id);
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembresiaDto: UpdateMembresiaDto) {
    return this.membresiasService.update(+id, updateMembresiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membresiasService.remove(+id);
  }
}

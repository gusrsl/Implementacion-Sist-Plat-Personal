import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipos } from '../schemas/equipos.schema';

@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Get()
  async findAll(): Promise<Equipos []> {
    return this.equiposService.findAll();
  }

  @Post()
  async create(@Body() createEquipoDto: CreateEquipoDto): Promise<Equipos > {
    return this.equiposService.create(createEquipoDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equiposService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipoDto: UpdateEquipoDto) {
    return this.equiposService.update(+id, updateEquipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equiposService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './entities/coach.entity';

@Controller('coaches')
export class CoachesController {

  constructor(private readonly coachesService: CoachesService) {}

  @Post()
  async create(@Body() createCoachDto: any): Promise<Coach> {
    return this.coachesService.create(createCoachDto);
  }

  @Get()
  async findAll(): Promise<Coach[]> {
    return this.coachesService.findAll();
  }

  @Get(':nombre')
  async findOne(@Param('nombre') coachNombre: string): Promise<Coach> {
    return this.coachesService.findOne(coachNombre);
  }

  @Patch(':nombre/:apellido')
  async patch(
    @Param('nombre') coachNombre: string,
    @Param('apellido') coachApellido: string,
    @Body() updateData: any
  ): Promise<Coach> {
    return this.coachesService.patchByNames(coachNombre, coachApellido, updateData);
  }

  @Delete(':nombre/:apellido')
async delete(
    @Param('nombre') coachNombre: string,
    @Param('apellido') coachApellido: string
): Promise<{ message: string }> {
    return this.coachesService.deleteByNames(coachNombre, coachApellido);
}
}

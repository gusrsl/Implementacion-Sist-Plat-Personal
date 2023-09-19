import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from '../schemas/gym.schema';

@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Post()
  async create(@Body() createGymDto: CreateGymDto): Promise<Gym> {
    return this.gymService.create(createGymDto);
  }

  @Get()
  async findAll(): Promise<Gym[]> {
    return this.gymService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGymDto: UpdateGymDto) {
    return this.gymService.update(+id, updateGymDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymService.remove(+id);
  }
}

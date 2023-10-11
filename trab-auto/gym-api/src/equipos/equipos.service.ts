import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Equipos } from '../schemas/equipos.schema';

@Injectable()
export class EquiposService {
  constructor(@InjectModel(Equipos.name) private equipoModel: Model<Equipos>) {}

  async findAll(): Promise<Equipos []> {
    return this.equipoModel.find().exec();
  }

  async create(createEquipoDto: CreateEquipoDto): Promise<Equipos > {
    const createdEquipo = new this.equipoModel(createEquipoDto);
    return createdEquipo.save();
  }

  findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}

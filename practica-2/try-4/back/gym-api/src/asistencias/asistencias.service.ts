import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Asistencia, AsistenciaDocument } from 'src/membresias/entities/asistencias.schema';
import { Model } from 'mongoose';

@Injectable()
export class AsistenciasService {
  constructor(
    @InjectModel(Asistencia.name) private asistenciaModel: Model<AsistenciaDocument>,
  ) {}

  async findAll(): Promise<Asistencia[]> {
    return this.asistenciaModel.find().exec();
  }

  async create(createAsistenciaDto: CreateAsistenciaDto): Promise<Asistencia> {
    const createdAsistencia = new this.asistenciaModel(createAsistenciaDto);
    return createdAsistencia.save();
  }

  findOne(id: number) {
    return `This action returns a #${id} asistencia`;
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return `This action updates a #${id} asistencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} asistencia`;
  }
}

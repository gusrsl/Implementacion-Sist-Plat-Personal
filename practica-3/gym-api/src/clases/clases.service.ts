import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Clase } from '../schemas/clases.schema';
import { Model } from 'mongoose';
import { Membresia } from 'src/schemas/membresias.schema';
import { Coaches } from 'src/schemas/coaches.schema';

@Injectable()
export class ClasesService {
  constructor(
    @InjectModel('Clase') private readonly claseModel: Model<any>
  ) {}

  async create(createClaseDto: any): Promise<any> {
    const createdClase = new this.claseModel(createClaseDto);
    return await createdClase.save();
  }

  async findAll(): Promise<Clase[]> {
    return await this.claseModel.find().exec();
}

  findOne(id: number) {
    return `This action returns a #${id} clase`;
  }

  update(id: number, updateClaseDto: UpdateClaseDto) {
    return `This action updates a #${id} clase`;
  }

  remove(id: number) {
    return `This action removes a #${id} clase`;
  }
}

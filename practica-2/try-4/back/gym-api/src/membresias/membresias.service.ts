import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMembresiaDto } from './dto/create-membresia.dto';
import { UpdateMembresiaDto } from './dto/update-membresia.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Membresia, MembresiaSchema, MembresiasDocument } from 'src/schemas/membresias.schema';
import { Gym } from 'src/schemas/gym.schema';
import { Equipos  } from 'src/schemas/equipos.schema';

@Injectable()
export class MembresiasService {

  constructor(@InjectModel('Membresia') private readonly membresiaModel: Model<MembresiasDocument>) {}

  async create(createMembresiaDto: CreateMembresiaDto): Promise<MembresiasDocument> {
    const createdMembresia = new this.membresiaModel(createMembresiaDto);
    return await createdMembresia.save();
  }

  async findAll(): Promise<MembresiasDocument[]> {
    return await this.membresiaModel.find().exec();
  }

  // Obtener una membresía específica
  async findOne(id: string): Promise<Membresia> {
    return this.membresiaModel.findById(id).exec();
}

  update(id: number, updateMembresiaDto: UpdateMembresiaDto) {
    return `This action updates a #${id} membresia`;
  }

  remove(id: number) {
    return `This action removes a #${id} membresia`;
  }
}

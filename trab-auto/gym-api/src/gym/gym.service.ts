import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Gym, GymDocument } from '../schemas/gym.schema';
import { Model } from 'mongoose';

@Injectable()
export class GymService {

  constructor(@InjectModel(Gym.name) private gymModel: Model<GymDocument>) {}

  async create(createGymDto: CreateGymDto): Promise<Gym> {
    const createdGym = new this.gymModel(createGymDto);
    return createdGym.save();
  }

  async findAll(): Promise<Gym[]> {
    return this.gymModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} gym`;
  }

  update(id: number, updateGymDto: UpdateGymDto) {
    return `This action updates a #${id} gym`;
  }

  remove(id: number) {
    return `This action removes a #${id} gym`;
  }
}

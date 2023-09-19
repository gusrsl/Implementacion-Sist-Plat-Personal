import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coaches } from '../schemas/coaches.schema';
import { Model } from 'mongoose';
import { Coach } from './entities/coach.entity';

@Injectable()
export class CoachesService {

  constructor(@InjectModel(Coaches.name) private coachesModel: Model<Coaches>) {}


  async create(coachData: Coach): Promise<Coach> {
    const newCoach = new this.coachesModel(coachData);
    return newCoach.save();
  }

  async findAll(): Promise<Coach[]> {
    return this.coachesModel.find().exec();
  }

  async findOne(coachNombre: string): Promise<Coach> {
    const coach = await this.coachesModel.findOne({ coach_nombre: coachNombre }).exec();
    if (!coach) {
      throw new NotFoundException(`Coach con nombre "${coachNombre}" no encontrado.`);
    }
    return coach;
  }

  async patchByNames(coachNombre: string, coachApellido: string, updateData: any): Promise<Coach> {
    const updatedCoach = await this.coachesModel.findOneAndUpdate(
      { coach_nombre: coachNombre, coach_apellido: coachApellido },
      updateData,
      { new: true }
    ).exec();

    if (!updatedCoach) {
      throw new NotFoundException(`Coach con nombre "${coachNombre}" y apellido "${coachApellido}" no encontrado.`);
    }

    return updatedCoach;
  }

  async deleteByNames(coachNombre: string, coachApellido: string): Promise<{ message: string }> {
    const result = await this.coachesModel.deleteOne({ coach_nombre: coachNombre, coach_apellido: coachApellido }).exec();

    if (result.deletedCount === 0) {
        throw new NotFoundException(`Coach con nombre "${coachNombre}" y apellido "${coachApellido}" no encontrado.`);
    }

    return { message: `Coach con nombre "${coachNombre}" y apellido "${coachApellido}" ha sido eliminado correctamente.` };
  }
}

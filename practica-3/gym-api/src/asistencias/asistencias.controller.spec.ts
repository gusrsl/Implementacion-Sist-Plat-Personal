import { Test, TestingModule } from '@nestjs/testing';
import { AsistenciasController } from './asistencias.controller';
import { AsistenciasService } from './asistencias.service';
import { Types } from 'mongoose';

const mockAsistenciasService = {
  findAll: jest.fn().mockReturnValue([
    { 
      AsistenciaID: '1',
      ClienteID: new Types.ObjectId(),
      ClaseID: new Types.ObjectId(),
      Fecha: new Date(),
      Hora: '10:00',
      GymID: new Types.ObjectId(),
    },
    { 
      AsistenciaID: '2',
      ClienteID: new Types.ObjectId(),
      ClaseID: new Types.ObjectId(),
      Fecha: new Date(),
      Hora: '11:00',
      GymID: new Types.ObjectId(),
    }
  ]),
};

describe('AsistenciasController', () => {
  let controller: AsistenciasController;
  let service: AsistenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsistenciasController],
      providers: [
        { provide: AsistenciasService, useValue: mockAsistenciasService },
      ],
    }).compile();

    controller = module.get<AsistenciasController>(AsistenciasController);
    service = module.get<AsistenciasService>(AsistenciasService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of asistencias', async () => {
      expect(await controller.findAll()).toEqual([
        { 
          AsistenciaID: '1',
          ClienteID: expect.any(Types.ObjectId),
          ClaseID: expect.any(Types.ObjectId),
          Fecha: expect.any(Date),
          Hora: '10:00',
          GymID: expect.any(Types.ObjectId),
        },
        { 
          AsistenciaID: '2',
          ClienteID: expect.any(Types.ObjectId),
          ClaseID: expect.any(Types.ObjectId),
          Fecha: expect.any(Date),
          Hora: '11:00',
          GymID: expect.any(Types.ObjectId),
        }
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});

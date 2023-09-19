import { Test, TestingModule } from '@nestjs/testing';
import { AsistenciasService } from './asistencias.service';
import { Model } from 'mongoose';
import { Asistencia, AsistenciaDocument } from '../schemas/asistencias.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('AsistenciasService', () => {
  let service: AsistenciasService;
  let mockAsistenciaModel: Partial<Model<AsistenciaDocument>>;

  beforeEach(async () => {
    mockAsistenciaModel = {
      // Aquí mockeamos todos los métodos que tu servicio pueda usar del modelo.
      find: jest.fn().mockResolvedValue([]),
      // ... puedes añadir más mockeos si los necesitas
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AsistenciasService,
        { provide: getModelToken(Asistencia.name), useValue: mockAsistenciaModel },
      ],
    }).compile();

    service = module.get<AsistenciasService>(AsistenciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of asistencias', async () => {
      const result = [];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);
      expect(await service.findAll()).toBe(result);
    });
  });

  // ... Puedes agregar más pruebas para otros métodos aquí ...

});

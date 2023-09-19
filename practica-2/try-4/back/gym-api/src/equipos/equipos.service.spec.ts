import { Test, TestingModule } from '@nestjs/testing';
import { EquiposService } from './equipos.service';
import { getModelToken } from '@nestjs/mongoose';

describe('EquiposService', () => {
  let service: EquiposService;
  let model;

  beforeEach(async () => {
    model = {
      find: jest.fn().mockReturnThis(),
      exec: jest.fn(),
      save: jest.fn(), // Para mockear la función 'save' en el método 'create'
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EquiposService,
        { provide: getModelToken('Equipos'), useValue: model },
      ],
    }).compile();

    service = module.get<EquiposService>(EquiposService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all equipos', async () => {
      const result = [];
      model.exec.mockReturnValue(result);

      expect(await service.findAll()).toEqual(result);
      expect(model.find).toHaveBeenCalled();
    });
  });

  // Aquí puedes añadir más tests para otros métodos cuando implementes sus funcionalidades
});

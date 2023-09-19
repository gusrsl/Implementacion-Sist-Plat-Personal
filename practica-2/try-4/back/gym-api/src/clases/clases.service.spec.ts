import { Test, TestingModule } from '@nestjs/testing';
import { ClasesService } from './clases.service';
import { getModelToken } from '@nestjs/mongoose';
import { Clase } from '../schemas/clases.schema';

describe('ClasesService', () => {
  let service: ClasesService;
  let mockClaseModel;

  beforeEach(async () => {
    mockClaseModel = {
      find: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue([new Clase()]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClasesService,
        {
          provide: getModelToken('Clase'),
          useValue: mockClaseModel,
        },
      ],
    }).compile();

    service = module.get<ClasesService>(ClasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of clases', async () => {
      const result = await service.findAll();
      expect(result).toEqual([new Clase()]);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MembresiasService } from './membresias.service';
import { getModelToken } from '@nestjs/mongoose';
import { Membresia } from '../schemas/membresias.schema';

describe('MembresiasService', () => {
  let service: MembresiasService;
  let mockMembresiaModel;

  beforeEach(async () => {
    mockMembresiaModel = {
      find: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue([new Membresia()]),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MembresiasService,
        {
          provide: getModelToken('Membresia'),
          useValue: mockMembresiaModel,
        },
      ],
    }).compile();

    service = module.get<MembresiasService>(MembresiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of membresias', async () => {
      expect(await service.findAll()).toEqual([new Membresia()]);
      expect(mockMembresiaModel.find).toHaveBeenCalled();
    });
  });
});

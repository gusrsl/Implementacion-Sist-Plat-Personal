import { Test, TestingModule } from '@nestjs/testing';
import { MembresiasController } from './membresias.controller';
import { MembresiasService } from './membresias.service';
import { Membresia } from '../schemas/membresias.schema';

describe('MembresiasController', () => {
  let controller: MembresiasController;
  let mockMembresiasService;

  beforeEach(async () => {
    mockMembresiasService = {
      findAll: jest.fn().mockResolvedValue([new Membresia()]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembresiasController],
      providers: [
        {
          provide: MembresiasService,
          useValue: mockMembresiasService,
        },
      ],
    }).compile();

    controller = module.get<MembresiasController>(MembresiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of membresias', async () => {
      expect(await controller.findAll()).toEqual([new Membresia()]);
      expect(mockMembresiasService.findAll).toHaveBeenCalled();
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ClasesController } from './clases.controller';
import { ClasesService } from './clases.service';
import { Clase } from '../schemas/clases.schema';

describe('ClasesController', () => {
  let controller: ClasesController;
  let mockService: any;

  beforeEach(async () => {
    mockService = {
      findAll: jest.fn().mockResolvedValue([new Clase()]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasesController],
      providers: [
        {
          provide: ClasesService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ClasesController>(ClasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of clases', async () => {
      expect(await controller.findAll()).toEqual([new Clase()]);
      expect(mockService.findAll).toHaveBeenCalled();
    });
  });
});

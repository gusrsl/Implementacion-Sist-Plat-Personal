import { Test, TestingModule } from '@nestjs/testing';
import { CoachesController } from './coaches.controller';
import { CoachesService } from './coaches.service';
import { Coach } from './entities/coach.entity';

describe('CoachesController', () => {
  let controller: CoachesController;
  let mockCoachesService;

  beforeEach(async () => {
    mockCoachesService = {
      findAll: jest.fn().mockResolvedValue([new Coach()]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoachesController],
      providers: [
        {
          provide: CoachesService,
          useValue: mockCoachesService,
        },
      ],
    }).compile();

    controller = module.get<CoachesController>(CoachesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of coaches', async () => {
      expect(await controller.findAll()).toEqual([new Coach()]);
      expect(mockCoachesService.findAll).toHaveBeenCalled();
    });
  });
});

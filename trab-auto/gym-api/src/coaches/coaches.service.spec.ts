import { Test, TestingModule } from '@nestjs/testing';
import { CoachesService } from './coaches.service';
import { getModelToken } from '@nestjs/mongoose';
import { Coaches } from '../schemas/coaches.schema';

describe('CoachesService', () => {
  let service: CoachesService;
  let mockCoachesModel;

  beforeEach(async () => {
    mockCoachesModel = {
      find: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue([new Coaches()]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoachesService,
        {
          provide: getModelToken(Coaches.name),
          useValue: mockCoachesModel,
        },
      ],
    }).compile();

    service = module.get<CoachesService>(CoachesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of coaches', async () => {
      const result = await service.findAll();
      expect(result).toEqual([new Coaches()]);
    });
  });
});

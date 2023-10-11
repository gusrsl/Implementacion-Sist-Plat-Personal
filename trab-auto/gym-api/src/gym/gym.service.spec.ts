import { Test, TestingModule } from '@nestjs/testing';
import { GymService } from './gym.service';
import { getModelToken } from '@nestjs/mongoose';

describe('GymService', () => {
  let service: GymService;
  let mockGymModel;

  beforeEach(async () => {
    mockGymModel = {
      find: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue([]),
      }),
      // Mockea otros métodos si los utilizas, como save(), findOne(), etc.
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GymService,
        {
          provide: getModelToken('Gym'),
          useValue: mockGymModel,
        },
      ],
    }).compile();

    service = module.get<GymService>(GymService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return an array of gyms', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  // Aquí puedes agregar más pruebas relacionadas con otros métodos en tu servicio.
});

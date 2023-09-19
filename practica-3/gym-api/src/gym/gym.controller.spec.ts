import { Test, TestingModule } from '@nestjs/testing';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';

describe('GymController', () => {
  let controller: GymController;
  let mockGymService;

  beforeEach(async () => {
    mockGymService = {
      findAll: jest.fn().mockResolvedValue([]),
      // Mockea otros métodos del servicio si los utilizas en el controlador.
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymController],
      providers: [
        {
          provide: GymService,
          useValue: mockGymService,
        },
      ],
    }).compile();

    controller = module.get<GymController>(GymController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of gyms', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  // Aquí puedes agregar más pruebas relacionadas con otros métodos en tu controlador.
});

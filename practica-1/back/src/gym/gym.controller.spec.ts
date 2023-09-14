import { Test, TestingModule } from '@nestjs/testing';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';

describe('GymController', () => {
  let controller: GymController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymController],
      providers: [GymService],
    }).compile();

    controller = module.get<GymController>(GymController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

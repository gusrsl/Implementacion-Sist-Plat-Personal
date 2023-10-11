import { Test, TestingModule } from '@nestjs/testing';
import { EquiposController } from './equipos.controller';
import { EquiposService } from './equipos.service';

describe('EquiposController', () => {
  let controller: EquiposController;
  let service: Partial<EquiposService>;

  beforeEach(async () => {
    service = {
      findAll: jest.fn(),
      // other methods are implicitly optional using Partial
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquiposController],
      providers: [{ provide: EquiposService, useValue: service }],
    }).compile();

    controller = module.get<EquiposController>(EquiposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all equipos', async () => {
      (service.findAll as jest.Mock).mockResolvedValue(['test1', 'test2']);
      expect(await controller.findAll()).toEqual(['test1', 'test2']);
    });
  });
});

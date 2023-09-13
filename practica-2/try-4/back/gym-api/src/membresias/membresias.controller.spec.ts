import { Test, TestingModule } from '@nestjs/testing';
import { MembresiasController } from './membresias.controller';
import { MembresiasService } from './membresias.service';

describe('MembresiasController', () => {
  let controller: MembresiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembresiasController],
      providers: [MembresiasService],
    }).compile();

    controller = module.get<MembresiasController>(MembresiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

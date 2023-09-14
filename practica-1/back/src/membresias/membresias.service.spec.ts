import { Test, TestingModule } from '@nestjs/testing';
import { MembresiasService } from './membresias.service';

describe('MembresiasService', () => {
  let service: MembresiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembresiasService],
    }).compile();

    service = module.get<MembresiasService>(MembresiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

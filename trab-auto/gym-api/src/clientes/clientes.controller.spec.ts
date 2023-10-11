import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { Clientes } from '../schemas/clientes.schema'; // Suponiendo que tienes una entidad llamada Cliente.

describe('ClientesController', () => {
  let controller: ClientesController;
  let service: ClientesService;

  beforeEach(async () => {
    const mockService = {
      findAll: jest.fn().mockResolvedValue([new Clientes()]),
      // Aquí puedes mockear otros métodos del servicio.
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [
        {
          provide: ClientesService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of clientes', async () => {
      expect(await controller.findAll()).toEqual([new Clientes()]);
    });
  });

  // Aquí puedes agregar más pruebas para otros endpoints como create, update, delete, etc.
});

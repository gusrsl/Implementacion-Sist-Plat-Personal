import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { Clientes } from '../schemas/clientes.schema'; // Suponiendo que tienes una entidad llamada Cliente.
import { getModelToken } from '@nestjs/mongoose';

describe('ClientesService', () => {
  let service: ClientesService;
  let mockClientesModel; // Declara mockClientesModel aquí para que esté disponible en todo el ámbito.

  beforeEach(async () => {
    mockClientesModel = { // Asigna el mock a la variable de nivel superior.
      find: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue([new Clientes()])
      })
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientesService,
        {
          provide: getModelToken('Clientes'), // Asegúrate de que 'Clientes' sea el nombre correcto de tu modelo.
          useValue: mockClientesModel,
        },
      ],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of membresias', async () => {
      expect(await service.findAll()).toEqual([new Clientes()]);
      expect(mockClientesModel.find).toHaveBeenCalled();
    });
  });
});

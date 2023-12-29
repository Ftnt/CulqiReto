import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { ExchangeResponseDto } from './dto/exchange-response.dto';

describe('ExchangeController', () => {
  let controller: ExchangeController;
  let service: ExchangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExchangeController],
      providers: [
        {
          provide: ExchangeService,
          useValue: {
            calculateExchange: jest.fn(),
            updateExchangeRate: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ExchangeController>(ExchangeController);
    service = module.get<ExchangeService>(ExchangeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should calculate exchange', async () => {
    const dto = new CreateExchangeDto();
    const result = new ExchangeResponseDto();
    jest.spyOn(service, 'calculateExchange').mockImplementation(() => result);
    expect(await controller.calculate(dto)).toBe(result);
  });

  it('should update exchange rate through POST request', () => {
    const updateDto = { fromCurrency: 'USD', toCurrency: 'EUR', rate: 0.92 };
    jest.spyOn(service, 'updateExchangeRate').mockImplementation(() => ({
      message: 'Tipo de cambio actualizado con éxito',
    }));

    expect(controller.updateExchangeRate(updateDto)).toEqual({
      message: 'Tipo de cambio actualizado con éxito',
    });
  });
});

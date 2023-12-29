import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeService } from './exchange.service';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

describe('ExchangeService', () => {
  let service: ExchangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeService],
    }).compile();

    service = module.get<ExchangeService>(ExchangeService);
  });

  it('should update exchange rate', () => {
    const updateDto = new UpdateExchangeRateDto();
    updateDto.fromCurrency = 'USD';
    updateDto.toCurrency = 'EUR';
    updateDto.rate = 0.92;

    expect(service.updateExchangeRate(updateDto)).toEqual({
      message: 'Tipo de cambio actualizado con éxito',
    });
  });
});

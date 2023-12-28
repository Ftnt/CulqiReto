import { Injectable } from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { ExchangeResponseDto } from './dto/exchange-response.dto';

@Injectable()
export class ExchangeService {
  private exchangeRates = {
    USD_EUR: 0.89,
    // Agrega más tasas de cambio según sea necesario
  };
  calculateExchange(dto: CreateExchangeDto): ExchangeResponseDto {
    const rate = this.exchangeRates[`${dto.fromCurrency}_${dto.toCurrency}`];
    const convertedAmount = dto.amount * rate;

    return {
      amount: dto.amount,
      convertedAmount,
      fromCurrency: dto.fromCurrency,
      toCurrency: dto.toCurrency,
      exchangeRate: rate,
    };
  }
}

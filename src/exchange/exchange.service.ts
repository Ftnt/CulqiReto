import { Injectable } from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { ExchangeResponseDto } from './dto/exchange-response.dto';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

@Injectable()
export class ExchangeService {
  private exchangeRates = {
    USD_PEN: 3.7,
    USD_EUR: 0.89,
    PEN_USD: 0.27,
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

  updateExchangeRate(dto: UpdateExchangeRateDto): any {
    const key = `${dto.fromCurrency}_${dto.toCurrency}`;
    this.exchangeRates[key] = dto.rate;
    return { message: 'Tipo de cambio actualizado con éxito' };
  }
}

import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
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
    const key = `${dto.fromCurrency}_${dto.toCurrency}`;
    const rate = this.exchangeRates[key];
    if (!rate) {
      throw new NotFoundException(
        `No se encontró el tipo de cambio de ${dto.fromCurrency} a ${dto.toCurrency}`,
      );
    }
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
    if (
      !this.isValidCurrency(dto.fromCurrency) ||
      !this.isValidCurrency(dto.toCurrency)
    ) {
      throw new BadRequestException('Monedas proporcionadas no son válidas');
    }
    this.exchangeRates[key] = dto.rate;
    return { message: 'Tipo de cambio actualizado con éxito' };
  }

  private isValidCurrency(currency: string): boolean {
    return Object.keys(this.exchangeRates).some((key) =>
      key.split('_').includes(currency),
    );
  }
}

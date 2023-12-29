import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { ExchangeResponseDto } from './dto/exchange-response.dto';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

@Controller('exchange')
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async calculate(
    @Body() createExchangeDto: CreateExchangeDto,
  ): Promise<ExchangeResponseDto> {
    return this.exchangeService.calculateExchange(createExchangeDto);
  }

  @Post('update-rate')
  updateExchangeRate(@Body() updateExchangeRateDto: UpdateExchangeRateDto) {
    return this.exchangeService.updateExchangeRate(updateExchangeRateDto);
  }
}

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExchangeService } from './exchange.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { ExchangeResponseDto } from './dto/exchange-response.dto';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

@ApiTags('exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Calcular tipo de cambio' })
  @ApiBody({ type: CreateExchangeDto })
  @ApiResponse({
    status: 201,
    description: 'El tipo de cambio ha sido calculado.',
    type: ExchangeResponseDto,
  })
  async calculate(
    @Body() createExchangeDto: CreateExchangeDto,
  ): Promise<ExchangeResponseDto> {
    return this.exchangeService.calculateExchange(createExchangeDto);
  }

  @Post('update-rate')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar tipo de cambio' })
  @ApiBody({ type: UpdateExchangeRateDto })
  @ApiResponse({
    status: 200,
    description: 'Tipo de cambio actualizado con éxito.',
  })
  updateExchangeRate(@Body() updateExchangeRateDto: UpdateExchangeRateDto) {
    return this.exchangeService.updateExchangeRate(updateExchangeRateDto);
  }
}

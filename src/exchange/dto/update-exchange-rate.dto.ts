import { ApiProperty } from '@nestjs/swagger';

export class UpdateExchangeRateDto {
  @ApiProperty({ example: 'USD', description: 'Moneda de origen' })
  fromCurrency: string;

  @ApiProperty({ example: 'EUR', description: 'Moneda de destino' })
  toCurrency: string;

  @ApiProperty({ example: 0.89, description: 'Nuevo tipo de cambio' })
  rate: number;
}

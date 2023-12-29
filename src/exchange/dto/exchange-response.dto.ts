import { ApiProperty } from '@nestjs/swagger';

export class ExchangeResponseDto {
  @ApiProperty({ example: 100, description: 'Monto original' })
  amount: number;

  @ApiProperty({
    example: 89,
    description: 'Monto convertido con el tipo de cambio',
  })
  convertedAmount: number;

  @ApiProperty({ example: 'USD', description: 'Moneda de origen' })
  fromCurrency: string;

  @ApiProperty({ example: 'EUR', description: 'Moneda de destino' })
  toCurrency: string;

  @ApiProperty({
    example: 0.89,
    description: 'Tipo de cambio utilizado para la conversión',
  })
  exchangeRate: number;
}

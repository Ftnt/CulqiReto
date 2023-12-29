import { ApiProperty } from '@nestjs/swagger';

export class CreateExchangeDto {
  @ApiProperty({ example: 100, description: 'Monto a cambiar' })
  amount: number;

  @ApiProperty({ example: 'USD', description: 'Moneda de origen' })
  fromCurrency: string;

  @ApiProperty({ example: 'EUR', description: 'Moneda de destino' })
  toCurrency: string;
}

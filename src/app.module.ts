import { Module } from '@nestjs/common';
import { ExchangeController } from './exchange/exchange.controller';
import { ExchangeModule } from './exchange/exchange.module';
import { ExchangeService } from './exchange/exchange.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ExchangeModule, AuthModule],
  controllers: [ExchangeController],
  providers: [ExchangeService],
})
export class AppModule {}

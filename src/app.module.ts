import { Module } from '@nestjs/common';
import { ExchangeController } from './exchange/exchange.controller';
import { ExchangeModule } from './exchange/exchange.module';
import { ExchangeService } from './exchange/exchange.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ExchangeModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ExchangeController],
  providers: [ExchangeService],
})
export class AppModule {}

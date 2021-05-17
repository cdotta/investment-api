import { HttpModule, Module } from '@nestjs/common';
import { BinanceModule } from 'src/binance/binance.module';
import { BinanceService } from 'src/binance/binance.service';
import { ChartsResolver } from './charts.resolver';
import { ChartsService } from './charts.service';

@Module({
  imports: [BinanceModule, HttpModule],
  providers: [ChartsResolver, ChartsService, BinanceService],
})
export class ChartsModule {}

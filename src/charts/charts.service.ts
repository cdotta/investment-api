import { Injectable } from '@nestjs/common';
import { BinanceService } from 'src/binance/binance.service';
import { ChartDataInput } from './charts.dto';

@Injectable()
export class ChartsService {
  constructor(private binanceService: BinanceService) {}
  getData(chartDataInput: ChartDataInput) {
    return this.binanceService.getCandlestickData(chartDataInput);
  }
}

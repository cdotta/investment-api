import { HttpService, Injectable } from '@nestjs/common';
import { CandlestickData, ChartDataInput } from 'src/charts/charts.dto';
import { DATA_INDEXES } from './binance.constants';
import { BinanceFilter } from './binance.dto';

const BASE_URL = 'https://api.binance.com';

const mapBinanceDataToCandlestickData = (
  binanceData: any[],
): CandlestickData => ({
  openTime: binanceData[DATA_INDEXES.openTime],
  open: binanceData[DATA_INDEXES.open],
  high: binanceData[DATA_INDEXES.high],
  low: binanceData[DATA_INDEXES.low],
  close: binanceData[DATA_INDEXES.close],
  volume: binanceData[DATA_INDEXES.volume],
  closeTime: binanceData[DATA_INDEXES.closeTime],
  quoteAssetVolume: binanceData[DATA_INDEXES.quoteAssetVolume],
  numberOfTrades: binanceData[DATA_INDEXES.numberOfTrades],
});

@Injectable()
export class BinanceService {
  constructor(private httpService: HttpService) {}

  async getCandlestickData(
    chartDataInput: ChartDataInput,
  ): Promise<CandlestickData[]> {
    const response = await this.httpService
      .get(this.buildUrl('/api/v3/klines'), {
        params: this.buildParamsFromInput(chartDataInput),
      })
      .toPromise();
    return response.data.map(mapBinanceDataToCandlestickData);
  }

  private buildUrl(endpoint: string) {
    return BASE_URL + endpoint;
  }

  private buildParamsFromInput(chartDataInput: ChartDataInput): BinanceFilter {
    return {
      symbol: chartDataInput.symbol,
      interval: chartDataInput.interval,
      startTime: chartDataInput.startTime,
      endTime: chartDataInput.endTime,
      limit: chartDataInput.limit,
    };
  }
}

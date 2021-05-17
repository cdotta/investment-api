export interface BinanceFilter {
  symbol: string;
  interval: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

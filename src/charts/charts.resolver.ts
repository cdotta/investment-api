import { Resolver, Query, Args } from '@nestjs/graphql';
import { CandlestickData, ChartDataInput } from './charts.dto';
import { ChartsService } from './charts.service';

@Resolver()
export class ChartsResolver {
  constructor(private chartsService: ChartsService) {}

  @Query((resolve) => [CandlestickData])
  async chartData(
    @Args('chartDataInput') chartDataInput: ChartDataInput,
  ): Promise<CandlestickData[]> {
    const chartData = await this.chartsService.getData(chartDataInput);
    return chartData;
  }
}

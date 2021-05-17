import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsIn, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { VALID_INTERVALS } from './charts.constants';

enum ChartDataSource {
  Binance = 'BINANCE',
}
registerEnumType(ChartDataSource, {
  name: 'ChartDataSource',
  description: 'ChartDataSource',
});

@InputType()
export class ChartDataInput {
  @Field(() => ChartDataSource)
  source: ChartDataSource;

  @Field()
  @IsNotEmpty()
  symbol: string;

  @Field()
  @IsIn(VALID_INTERVALS)
  interval: string;

  @Field({ nullable: true })
  @IsPositive()
  @IsOptional()
  startTime?: number;

  @Field({ nullable: true })
  @IsPositive()
  @IsOptional()
  endTime?: number;

  @Field({ nullable: true })
  @IsPositive()
  @IsOptional()
  limit?: number;
}

@ObjectType()
export class CandlestickData {
  @Field()
  openTime: number;

  @Field()
  open: string;

  @Field()
  high: string;

  @Field()
  low: string;

  @Field()
  close: string;

  @Field()
  volume: string;

  @Field()
  closeTime: number;

  @Field()
  quoteAssetVolume: string;

  @Field()
  numberOfTrades: number;
}

import { Query, Resolver } from '@nestjs/graphql';
import { Investment } from './investments.entity';
import { InvestmentsService } from './investments.service';

@Resolver()
export class InvestmentsResolver {
  constructor(private investmentsService: InvestmentsService) {}

  @Query((resolve) => [Investment])
  async investments(): Promise<Investment[]> {
    return this.investmentsService.getAllInvestments();
  }
}

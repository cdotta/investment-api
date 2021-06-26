import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Investment } from './investments.entity';
import { InvestmentsResolver } from './investments.resolver';
import { InvestmentsService } from './investments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Investment])],
  providers: [InvestmentsResolver, InvestmentsService],
})
export class InvestmentsModule {}

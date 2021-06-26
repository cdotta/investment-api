import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investment } from './investments.entity';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectRepository(Investment)
    private investmentsRepository: Repository<Investment>,
  ) {}

  getAllInvestments(): Promise<Investment[]> {
    return this.investmentsRepository.find();
  }
}

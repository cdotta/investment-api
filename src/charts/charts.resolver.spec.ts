import { Test, TestingModule } from '@nestjs/testing';
import { ChartsResolver } from './charts.resolver';

describe('ChartsResolver', () => {
  let resolver: ChartsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartsResolver],
    }).compile();

    resolver = module.get<ChartsResolver>(ChartsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

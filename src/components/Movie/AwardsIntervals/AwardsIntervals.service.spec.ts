import { Test, TestingModule } from '@nestjs/testing';
import { AwardsIntervalsService } from './AwardsIntervals.service';

describe('AwardsIntervalsService', () => {
  let service: AwardsIntervalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwardsIntervalsService],
    }).compile();

    service = module.get<AwardsIntervalsService>(AwardsIntervalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

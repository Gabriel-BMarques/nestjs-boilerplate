import { Test, TestingModule } from '@nestjs/testing';
import { AwardsIntervalsController } from './AwardsIntervals.controller';

describe('AwardsIntervalsController', () => {
  let controller: AwardsIntervalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AwardsIntervalsController],
    }).compile();

    controller = module.get<AwardsIntervalsController>(AwardsIntervalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

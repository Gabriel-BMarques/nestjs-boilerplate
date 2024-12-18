import { Module } from '@nestjs/common';
import { AwardsIntervalsService } from './AwardsIntervals.service';
import { MovieRepository } from 'src/infrastructure/repositories/Movie.repository';
import { AwardsIntervalsController } from './AwardsIntervals.controller';

@Module({
    providers: [
        AwardsIntervalsService,
        MovieRepository
    ],
    controllers: [AwardsIntervalsController]
})
export class AwardsIntervalsModule {}

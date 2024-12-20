import { Module } from '@nestjs/common';
import { AwardsIntervalsService } from './AwardsIntervals.service';
import { MovieRepository } from 'src/infrastructure/repositories/Movie/Movie.repository';
import { AwardsIntervalsController } from './AwardsIntervals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/infrastructure/entities/Movie.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Movie])
    ],
    providers: [
        AwardsIntervalsService,
        MovieRepository
    ],
    controllers: [AwardsIntervalsController]
})
export class AwardsIntervalsModule {}

import { Module } from '@nestjs/common';
import { AwardsIntervalsService } from './AwardsIntervals.service';
import { AwardsIntervalsController } from './AwardsIntervals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/infrastructure/entities/Movie.entity';
import { Producer } from 'src/infrastructure/entities/Producer.entity';
import { MovieProducer } from 'src/infrastructure/entities/MovieProducer.entity';
import { MovieModule } from 'src/infrastructure/repositories/Movie/Movie.module';
import { ProducerModule } from 'src/infrastructure/repositories/Producer/Producer.module';
import { MovieProducerModule } from 'src/infrastructure/repositories/MovieProducer/MovieProducer.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Movie, Producer, MovieProducer]),
        MovieModule,
        ProducerModule,
        MovieProducerModule
    ],
    providers: [
        AwardsIntervalsService
    ],
    controllers: [AwardsIntervalsController]
})
export class AwardsIntervalsModule {}

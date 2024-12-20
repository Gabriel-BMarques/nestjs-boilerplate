import { Module } from '@nestjs/common';
import { AwardsIntervalsService } from './AwardsIntervals.service';
import { AwardsIntervalsController } from './AwardsIntervals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieProducer } from 'src/infrastructure/entities/MovieProducer.entity';
import { ProducerModule } from 'src/infrastructure/repositories/Producer/Producer.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([MovieProducer]),
        ProducerModule
    ],
    providers: [
        AwardsIntervalsService
    ],
    controllers: [AwardsIntervalsController]
})
export class AwardsIntervalsModule {}

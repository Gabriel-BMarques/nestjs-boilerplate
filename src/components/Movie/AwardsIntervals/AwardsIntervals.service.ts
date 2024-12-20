import { Injectable } from '@nestjs/common';
import { MovieRepository } from 'src/infrastructure/repositories/Movie/Movie.repository';
import { MovieProducerRepository } from 'src/infrastructure/repositories/MovieProducer/MovieProducer.repository';
import { ProducerRepository } from 'src/infrastructure/repositories/Producer/Producer.repository';
import { AwardsIntervals } from 'src/infrastructure/responses/models/AwardsIntervals.model';

@Injectable()
export class AwardsIntervalsService {
    constructor(
        private readonly movieRepository: MovieRepository,
        private readonly producerRepository: ProducerRepository,
        private readonly movieProducerRepository: MovieProducerRepository
    ) {}

    async execute(): Promise<AwardsIntervals | any> {
        const movies = await this.movieRepository.listAll();
        const producers = await this.producerRepository.listAll();
        const movieProducers = await this.movieProducerRepository.listAll();

        return {
            movies,
            producers,
            movieProducers
        };
    }
}

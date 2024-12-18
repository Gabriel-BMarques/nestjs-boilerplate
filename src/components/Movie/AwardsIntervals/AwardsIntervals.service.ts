import { Injectable } from '@nestjs/common';
import { MovieRepository } from 'src/infrastructure/repositories/Movie.repository';
import { AwardsIntervals } from 'src/infrastructure/responses/models/AwardsIntervals.model';

@Injectable()
export class AwardsIntervalsService {
    constructor(
        private readonly movieRepository: MovieRepository
    ) {}

    async execute(): Promise<AwardsIntervals | any> {
        const movies = await this.movieRepository.listAll();

        return movies;
    }
}

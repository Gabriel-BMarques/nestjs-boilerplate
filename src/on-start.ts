import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { Movie } from './infrastructure/entities/Movie.entity';
import { MovieRepository } from './infrastructure/repositories/Movie/Movie.repository';
import { MovieProducer } from './infrastructure/entities/MovieProducer.entity';
import { Producer } from './infrastructure/entities/Producer.entity';
import { MovieProducerRepository } from './infrastructure/repositories/MovieProducer/MovieProducer.repository';
import { ProducerRepository } from './infrastructure/repositories/Producer/Producer.repository';

function extractProducerNames(input: string): string[] {
    const sanitizedInput = input.replace(/\sand\s/g, ", ");
    const names = sanitizedInput.split(", ").map(name => name.trim());

    return names;
}

export async function populateDatabase(
    movieRepository: MovieRepository,
    producerRepository: ProducerRepository,
    movieProducerRepository: MovieProducerRepository
): Promise<void> {
    const filePath = path.resolve(__dirname, '../src/assets/Movielist.csv');
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let isHeader = true;
    let headers: string[] = [];

    for await (const line of rl) {
        if (isHeader) {
            headers = line.split(';').map(header => header.trim());
            isHeader = false;
            continue;
        }

        const values = line.split(';').map(value => value.trim());

        const movie: Partial<Movie> = {
            year: parseInt(values[headers.indexOf('year')], 10),
            title: values[headers.indexOf('title')],
            studios: values[headers.indexOf('studios')],
            winner: values[headers.indexOf('winner')] === 'yes',
        };

        const createdMovie = await movieRepository.create(movie);

        const producers: Partial<Producer>[] = [
            ...new Set(
                extractProducerNames(values[headers.indexOf('producers')])
            )
        ].map(name => ({ name }));

        await Promise.all(producers.map(async producer => {
            const createdProducer = await producerRepository.create(producer);

            return movieProducerRepository.create({
                movie_id: createdMovie.id,
                producer_id: createdProducer.id,
            })
        }))

    }
}
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { Movie } from './infrastructure/entities/Movie.entity';
import { MovieRepository } from './infrastructure/repositories/Movie/Movie.repository';

export async function populateDatabase(movieRepository: MovieRepository): Promise<void> {
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
            producers: values[headers.indexOf('producers')],
            winner: values[headers.indexOf('winner')] === 'yes',
        };

        await movieRepository.create(movie);
    }
}
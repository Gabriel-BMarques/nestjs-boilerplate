import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';

function insertMoviesOnDb() {
    const csvFilePath = path.resolve(__dirname, '../src/assets/Movielist.csv');
    const movies: any[] = [];

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            movies.push(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            console.log(movies);
            // Here you can insert the movies array into your database
        });
}

export async function onStart() {
    await Promise.all([
        insertMoviesOnDb()
    ]);
}
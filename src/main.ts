import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as cors from 'cors';
import { populateDatabase } from './on-start';
import { MovieRepository } from './infrastructure/repositories/Movie/Movie.repository';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  app.use(cors());

  const movieRepository = app.get(MovieRepository);
  await populateDatabase(movieRepository);

  await app.listen(3000);
}
bootstrap();

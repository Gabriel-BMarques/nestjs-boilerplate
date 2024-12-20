import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../../entities/Movie.entity';
import { MovieProducerRepository } from './MovieProducer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
  ],
  providers: [MovieProducerRepository],
  exports: [MovieProducerRepository],
})
export class MovieProducerModule {}

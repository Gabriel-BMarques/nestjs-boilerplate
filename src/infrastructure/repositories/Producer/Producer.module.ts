import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../../entities/Movie.entity';
import { ProducerRepository } from './Producer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
  ],
  providers: [ProducerRepository],
  exports: [ProducerRepository],
})
export class ProducerModule {}

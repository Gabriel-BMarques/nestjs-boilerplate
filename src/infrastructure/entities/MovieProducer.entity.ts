import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieProducer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: number;

  @Column()
  producer_id: number;
}

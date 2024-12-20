import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

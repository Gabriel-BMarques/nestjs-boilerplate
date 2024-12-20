import { Module } from '@nestjs/common';
import { AwardsIntervalsModule } from './components/Movie/AwardsIntervals/AwardsIntervals.module';
import { MovieModule } from './infrastructure/repositories/Movie/Movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    AwardsIntervalsModule,
    MovieModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

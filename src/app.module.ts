import { Module } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AwardsIntervalsModule } from './components/Movie/AwardsIntervals/AwardsIntervals.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AwardsIntervalsModule
  ],
  controllers: [],
  providers: [
    JwtService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}

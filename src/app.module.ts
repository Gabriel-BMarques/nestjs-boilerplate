import { Module } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { CreateUserModule } from './components/User/CreateUser/CreateUser.module';

@Module({
  imports: [CreateUserModule],
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

import { Module } from '@nestjs/common';
import { CreateUserService } from './CreateUser.service';
import { CreateUserController } from './CreateUser.controller';
import { UserRepository } from 'src/infrastructure/repositories/User.repository';

@Module({
  providers: [
    CreateUserService,
    UserRepository,
  ],
  controllers: [CreateUserController],
})
export class CreateUserModule {}

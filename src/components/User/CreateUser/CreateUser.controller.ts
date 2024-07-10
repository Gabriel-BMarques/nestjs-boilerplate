import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserService } from './CreateUser.service';
import { CreateUserDTO } from './CreateUser.dto';
import { FastifyReply } from 'fastify';

@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async handle(
    @Body() createUserDTO: CreateUserDTO,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const user = await this.createUserService.execute(createUserDTO);

    reply.status(200).send(user);
  }
}

import { Injectable } from '@nestjs/common';
import { database } from 'knexfile';
import { User } from 'src/infrastructure/entities/Movie.entity';

export interface IUserRepository {
  create(payload: User): Promise<User>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  async create(payload: User): Promise<User> {
    await database.transaction((trx) => {
      database
        .insert(payload)
        .into('users')
        .then(trx.commit)
        .catch(trx.rollback);
    });

    return payload;
  }
}

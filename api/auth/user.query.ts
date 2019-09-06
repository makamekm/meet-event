import { Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@Resolver()
export class UserQuery {

  @Query(() => UserEntity)
  async me(): Promise<UserEntity> {
    return new UserEntity();
  }
}

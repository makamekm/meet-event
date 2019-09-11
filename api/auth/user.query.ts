import { Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver()
export class UserQuery {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  @Query(() => UserEntity)
  async me(): Promise<UserEntity> {
    const users = await this.userRepository.find({
      // relations: ['addresses', 'score'],
      // join: {
      //   alias: "user",
      //   leftJoinAndSelect: {
      //     address: "user.address",
      //     addresses: "user.addresses",
      //   },
      // },
    });
    // console.log(users, users.map(u => u.addresses));
    return new UserEntity();
  }
}

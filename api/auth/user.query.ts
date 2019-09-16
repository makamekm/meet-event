import { Resolver, Query, Context, Mutation, Args } from '@nestjs/graphql';
import { UserEntity } from './user.entity';
import { CurrentUser } from './auth.decorator';
import { GraphqlAuthGuard } from './auth.guard';
import { UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

const days = 365;
const time = (days * 86400000);

@Resolver()
export class UserQuery {
  constructor(private readonly authService: AuthService) {}

  @Query(() => UserEntity)
  @UseGuards(GraphqlAuthGuard)
  async me(@CurrentUser() user: UserEntity): Promise<UserEntity> {
    return user;
  }

  @Query(() => UserEntity)
  public async login(
    @Context() ctx: { res: Response },
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const { token, user } = await this.authService.login(email, password);
    ctx.res.cookie('token', token, { expires: new Date(Date.now() + time), path: '/' });
    return user;
  }

  @Mutation(() => Boolean)
  @UseGuards(GraphqlAuthGuard)
  public async logout(@Context() ctx: { res: Response }) {
    ctx.res.cookie('token', '', { expires: new Date(Date.now() - time), path: '/' });
    return true;
  }

  @Mutation(() => Boolean)
  public async registration(
    @Context() ctx: { res: Response },
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    throw new Error('The regisration is not working now');
  }
}

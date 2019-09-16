import { Resolver, Query, Args } from '@nestjs/graphql';
import { CommentEntity } from './comment.entity';
import { GraphQLJSONObject } from 'graphql-type-json';
import { CommentSelectService } from './comment-select.service';
import { EventSelectService } from '../event/event-select.service';

@Resolver()
export class CommentQuery {
  constructor(
    private readonly selectEventService: EventSelectService,
    private readonly selectCommentService: CommentSelectService,
  ) {}

  @Query(() => [GraphQLJSONObject])
  async comments(
    @Args('limit') limit: number,
    @Args('skip') skip: number,
    @Args('event') event: number,
  ): Promise<CommentEntity[]> {
    return await this.selectCommentService.select(
      limit,
      skip,
      await this.selectEventService.selectOne(event),
    );
  }
}

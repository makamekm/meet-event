import { Module, forwardRef } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentCreateService } from './comment-create.service';
import { CommentQuery } from './comment.query';
import { CommentSelectService } from './comment-select.service';
import { EventModule } from '../event/event.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    forwardRef(() => EventModule),
  ],
  providers: [
    CommentSelectService,
    CommentCreateService,
    CommentQuery,
  ],
  exports: [
    CommentSelectService,
    CommentCreateService,
  ],
})
export class CommentModule {}

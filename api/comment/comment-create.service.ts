import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { EventEntity } from '../event/event.entity';
import { UserEntity } from '../auth/user.entity';

@Injectable()
export class CommentCreateService {
  constructor(
    @InjectRepository(CommentEntity) private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  public async create(message: string, event: EventEntity, user: UserEntity, parent: CommentEntity = null) {
    const comment = await this.commentRepository.save({
      event,
      parent,
      message,
    });
    return comment;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { EventEntity } from '../event/event.entity';

@Injectable()
export class CommentSelectService {
  constructor(
    @InjectRepository(CommentEntity) private readonly commentRepository: Repository<CommentEntity>,
  ) {}

  public async select(limit: number, skip: number = 0, event: EventEntity) {
    const comments = await this.commentRepository.find({
      skip,
      take: limit,
      where: {
        parent: null,
        event,
      },
      order: {
        created_at: 'DESC',
      },
    });
    await this.selectChildren(comments);
    return comments;
  }

  public async selectParent(id: number) {
    const comments = await this.commentRepository.find({
      where: {
        id,
        event,
      },
      order: {
        created_at: 'DESC',
      },
    });
    await this.selectAllChildren(comments);
    return comments;
  }

  private async selectChildren(comments: CommentEntity[]) {
    await Promise.all(
      comments.map(async comment => {
        comment.comments = await this.selectChild(comment);
      }),
    );
  }

  private async selectAllChildren(comments: CommentEntity[]) {
    await this.selectChildren(comments);
    return await this.selectAllChildren(comments);
  }

  private async selectChild(parent: CommentEntity) {
    return await this.commentRepository.find({
      where: {
        parent,
        event,
      },
      relations: ['comments'],
      order: {
        created_at: 'DESC',
      },
    });
  }
}

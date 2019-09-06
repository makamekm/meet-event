import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, TreeParent, TreeChildren, Tree } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { ICommentModel } from '../shared/comment/comment.model';
import { UserEntity } from '../auth/user.entity';
import { EventEntity } from '../event/event.entity';

@ObjectType()
@Entity()
@Tree('nested-set')
export class CommentEntity implements ICommentModel {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => [CommentEntity])
  @TreeChildren()
  comments: CommentEntity[];

  @Field(() => [CommentEntity])
  @TreeParent()
  parent?: CommentEntity;

  @Field(() => EventEntity)
  @ManyToOne(() => EventEntity, event => event.comments)
  event: EventEntity;

  @Field(() => [])
  @ManyToOne(() => UserEntity)
  author: UserEntity;

  @Field()
  @Column({ default: '' })
  message: string = '';

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at?: Date;

  @Column({ default: false })
  banned: boolean = false;

  @Field(type => Int)
  @Column({ default: 0 })
  rating: number = 0;
}

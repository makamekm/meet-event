import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, TreeParent, TreeChildren, Tree } from 'typeorm';
import { Field, Int } from 'type-graphql';
import { UserEntity } from '../auth/user.entity';
import { CommentEntity } from './comment.entity';

@Entity()
export class CommentRatingEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => CommentEntity)
  @ManyToOne(() => CommentEntity)
  comment: CommentEntity;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity)
  author: UserEntity;

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at?: Date;

  @Field(() => Int)
  @Column({ default: 1 })
  value: number = 1;
}

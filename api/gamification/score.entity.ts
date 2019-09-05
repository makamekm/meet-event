import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { UserEntity } from '../auth/user.entity';
import { Level } from '../shared/gamification/level.structure';
import { IScoreModel } from '../shared/gamification/score.model';

@ObjectType()
@Entity()
export class ScoreEntity implements IScoreModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => UserEntity)
  @OneToOne(() => UserEntity, user => user.score)
  user: UserEntity;

  @Field(() => Int)
  @Column({ default: 0 })
  score: number = 0;

  @Field(() => Int)
  get level() {
    return Level.Newbie;
  }

  @Field(() => Int)
  get newLevelPercentage() {
    return 0;
  }
}

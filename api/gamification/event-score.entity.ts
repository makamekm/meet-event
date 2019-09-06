import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { IEventScoreModel } from '../shared/gamification/event-score.model';
import { EventEntity } from '../event/event.entity';

@ObjectType()
@Entity()
export class EventScoreEntity implements IEventScoreModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => EventEntity)
  @OneToOne(() => EventEntity, event => event.score)
  event: EventEntity;

  @Field(() => Int)
  @Column({ default: 0 })
  score_multiplex: number = 0;

  @Field(() => Int)
  get score() {
    return 0;
  }
}

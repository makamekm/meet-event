import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { UserEntity } from '../auth/user.entity';
import { EventUser } from '../shared/event/event-user.enum';
import { IEventUserModel } from '../shared/event/event-user.model';
import { EventEntity } from './event.entity';

@ObjectType()
@Entity()
export class EventUserEntity implements IEventUserModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ type: 'text' })
  type: EventUser = EventUser.Attender;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Field(() => EventEntity)
  @ManyToOne(() => EventEntity, event => event.users)
  event: EventEntity;

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at?: Date;

  @Column({ default: false })
  proved: boolean = false;
}

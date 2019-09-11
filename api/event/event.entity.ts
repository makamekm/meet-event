import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { IEventModel } from '../shared/event/event.model';
import { EventUserEntity } from './event-user.entity';
import { CardEntity } from '../card/card.entity';
import { CommentEntity } from '../comment/comment.entity';
import { EventScoreEntity } from '../gamification/event-score.entity';
import { AddressEntity } from '../address/address.entity';
import { Genre } from '../shared/genre/genre.structure';
import { EventAddressEntity } from './event-address.entity';

@ObjectType()
@Entity()
export class EventEntity implements IEventModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ default: '' })
  description: string = '';

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at?: Date;

  @Field()
  @Column()
  public_at?: Date;

  @Field()
  @Column()
  duration?: number;

  @Field()
  @Column()
  question?: string;

  @Field()
  @Column()
  answer?: string;

  @Column({ default: false })
  public: boolean = false;

  @Field(() => [EventUserEntity])
  @OneToMany(() => EventUserEntity, user => user.event)
  users: EventUserEntity[];

  @Field(() => CardEntity)
  @ManyToOne(() => CardEntity)
  card?: CardEntity;

  @Field(() => [CommentEntity])
  @OneToMany(() => CommentEntity, comment => comment.event)
  comments: CommentEntity[];

  @Field(() => EventScoreEntity)
  @OneToOne(() => EventScoreEntity, score => score.event)
  score: EventScoreEntity;

  @Field(() => [Int])
  @Column('simple-array')
  genres: Genre[] = [];

  @ManyToOne(() => EventScoreEntity)
  addressSelected?: AddressEntity;

  @OneToOne(() => EventAddressEntity)
  addressEntered: EventAddressEntity;

  @Field(() => EventScoreEntity)
  get address() {
    return this.addressSelected || this.addressEntered;
  }

  @Field(() => EventScoreEntity)
  get address_picked() {
    return !!this.addressSelected;
  }
}

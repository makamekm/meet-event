import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { IEventAddressModel } from '../shared/event/event-address.model';
import { EventEntity } from './event.entity';

@ObjectType()
@Entity()
export class EventAddressEntity implements IEventAddressModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ default: '' })
  description: string = '';

  @Field()
  @Column({ default: '' })
  country: string = '';

  @Field()
  @Column({ default: '' })
  city: string = '';

  @Field(() => Int)
  @Column({ default: 0 })
  latitude: number = 0;

  @Field(() => Int)
  @Column({ default: 0 })
  longitude: number = 0;

  @OneToOne(() => EventEntity, user => user.address)
  event: EventEntity[];
}

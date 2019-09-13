import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { IUserAddressModel } from '../shared/auth/user-address.model';
import { ObjectType, Field, Int } from 'type-graphql';
import { UserEntity } from './user.entity';

@ObjectType()
@Entity()
export class UserAddressEntity implements IUserAddressModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

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

  @ManyToOne(() => UserEntity, user => user.addresses, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: UserEntity;

  @Field()
  @Column({ default: false })
  primary: boolean = false;
}

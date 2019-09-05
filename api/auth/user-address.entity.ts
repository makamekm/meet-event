import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IUserAddressModel } from '../shared/auth/user-address.model';
import { ObjectType, Field, Int } from 'type-graphql';
import { UserEntity } from './user.entity';

@ObjectType()
@Entity()
export class UserAddressEntity implements IUserAddressModel {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ default: '' })
  country: string = '';

  @Field()
  @Column({ default: '' })
  city: string = '';

  @Field(type => Int)
  @Column({ default: 0 })
  latitude: number = 0;

  @Field(type => Int)
  @Column({ default: 0 })
  longitude: number = 0;

  @OneToMany(type => UserEntity, user => user.addresses)
  user: UserEntity[];
}

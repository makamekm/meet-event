import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { IAddressModel } from '../shared/adresses/address.model';

@ObjectType()
@Entity()
export class AddressEntity implements IAddressModel {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ default: '' })
  country: string = '';

  @Field()
  @Column({ default: '' })
  city: string = '';

  @Field()
  @Column({ default: '' })
  description: string = '';

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at?: Date;

  @Column({ default: false })
  disabled?: boolean = false;

  @Field(type => Int)
  @Column({ default: 0 })
  latitude: number = 0;

  @Field(type => Int)
  @Column({ default: 0 })
  longitude: number = 0;
}

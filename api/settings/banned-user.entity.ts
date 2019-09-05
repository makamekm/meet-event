import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { UserEntity } from '../auth/user.entity';

@ObjectType()
@Entity()
export class BannedUserEntity {

  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(type => [UserEntity])
  @OneToOne(type => UserEntity)
  user: UserEntity;

  @Field()
  @Column({ default: '' })
  description: string = '';

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at?: Date;
}

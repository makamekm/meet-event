import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { ICardModel } from '../shared/card/card.model';
import { UserEntity } from '../auth/user.entity';

@ObjectType()
@Entity()
export class CardEntity implements ICardModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ default: '' })
  image: string = '';

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
  public: boolean = false;

  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity, user => user.cards)
  users: UserEntity[];

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity)
  author: UserEntity;
}

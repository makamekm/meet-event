import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { UserAddressEntity } from './user-address.entity';
import { IUserModel } from '../shared/auth/user.model';
import { Genre } from '../shared/genre/genre.structure';
import { CardEntity } from '../card/card.entity';
import { ScoreEntity } from '../gamification/score.entity';

@ObjectType()
@Entity()
export class UserEntity implements IUserModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ default: '' })
  email: string = '';

  @Column({ default: '' })
  password: string = '';

  @Field()
  @Column({ default: '' })
  first_name: string = '';

  @Field()
  @Column({ default: '' })
  last_name: string = '';

  @Field()
  @Column({ default: '' })
  contact_information: string = '';

  @Field(() => UserAddressEntity)
  get address() {
    return this.addresses.find(a => a.primary === true);
  }

  @Field(() => [UserAddressEntity])
  @OneToMany(() => UserAddressEntity, address => address.user, { eager: true })
  addresses: UserAddressEntity[];

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updated_at?: Date;

  @Field(() => [Int])
  @Column('simple-array')
  recommend_genres: Genre[] = [];

  @Field(() => ScoreEntity)
  @OneToOne(() => ScoreEntity, score => score.user, { eager: true })
  @JoinColumn()
  score: ScoreEntity;

  @Field(() => [CardEntity])
  @ManyToMany(() => CardEntity, card => card.users)
  cards: CardEntity[];
}

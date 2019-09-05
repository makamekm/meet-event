import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { UserEntity } from '../auth/user.entity';
import { INotificationModel } from '../shared/notification/notification.model';
import { NotificationType } from '../shared/notification/notification.enum';

@ObjectType()
@Entity()
export class NotificationEntity implements INotificationModel {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column({ default: '' })
  short_message: string = '';

  @Field()
  @Column({ default: '' })
  message: string = '';

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Column({ default: false })
  seen: boolean = false;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Field()
  @Column({ type: 'text', default: NotificationType.Normal })
  type: NotificationType = NotificationType.Normal;
}

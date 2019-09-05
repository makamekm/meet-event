import { ObjectType, Field } from 'type-graphql';
import { ISettingsModel } from '../shared/settings/settings.model';
import { UserEntity } from '../auth/user.entity';
import { BannedUserEntity } from './banned-user.entity';

@ObjectType()
export class SettingsModel implements ISettingsModel {

  @Field(type => [UserEntity])
  administrators: UserEntity[];

  @Field()
  genres_sore_multiplex: {
    [genre: number]: number;
  } = {};

  @Field(type => [UserEntity])
  banned_users: UserEntity[];

  @Field(type => [BannedUserEntity])
  banned_users_entity: BannedUserEntity[];
}

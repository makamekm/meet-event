import { IUserModel } from '../auth/user.model';

export interface ISettingsModel {
  administrators: IUserModel[];
  genres_sore_multiplex: {
    [genre: number]: number;
  };
  banned_users: IUserModel[];
}

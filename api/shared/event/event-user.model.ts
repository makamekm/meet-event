import { IUserModel } from '../auth/user.model';
import { EventUser } from './event-user.enum';

export interface IEventUserModel {
  id?: number;
  type: EventUser;
  user: IUserModel;
  proved: boolean;
}

import { IUserModel } from '../auth/user.model';
import { NotificationType } from './notification.enum';

export interface INotificationModel {
  id?: number;
  user: IUserModel;
  type: NotificationType;
  short_message: string;
  message: string;
}

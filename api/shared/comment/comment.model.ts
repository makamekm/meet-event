import { IUserModel } from '../auth/user.model';

export interface ICommentModel {
  id?: number;
  author: IUserModel;
  message: string;
  banned: boolean;
  comments: ICommentModel[];
  parent?: ICommentModel;
  created_at?: Date;
  updated_at?: Date;
  rating: number;
}

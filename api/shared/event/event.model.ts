import { IEventAddressModel } from './event-address.model';
import { Genre } from '../genre/genre.structure';
import { ICardModel } from '../card/card.model';
import { ICommentModel } from '../comment/comment.model';
import { IEventUserModel } from './event-user.model';
import { IAddressModel } from '../adresses/address.model';
import { IEventScoreModel } from '../gamification/event-score.model';

export interface IEventModel {
  id?: number;
  users: IEventUserModel[];
  address: IEventAddressModel | IAddressModel;
  address_picked: boolean;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  public_at?: Date;
  date?: Date;
  duration?: number;
  question?: string;
  answer?: string;
  genres: Genre[];
  public: boolean;
  card?: ICardModel;
  score: IEventScoreModel;
  comments: ICommentModel[];
}

import { IEventAddressModel } from './event-address.model';
import { Genre } from '../genre/genre.structure';
import { IUserModel } from '../auth/user.model';
import { ICardModel } from '../card/card.model';

export interface IEventModel {
  id?: number;
  moderators: IUserModel[];
  attenders: IUserModel[];
  speakers: IUserModel[];
  address: IEventAddressModel;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  public_at?: Date;
  date?: Date;
  duration?: boolean;
  genres: Genre[];
  public: boolean;
  card?: ICardModel;
  score?: number;
  score_multiplex: number;
}

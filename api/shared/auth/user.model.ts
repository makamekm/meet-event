import { IUserAddressModel } from './user-address.model';
import { Genre } from '../genre/genre.structure';
import { ICardModel } from '../card/card.model';
import { IScoreModel } from '../gamification/score.model';

export interface IUserModel {
  id?: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  contact_information: string;
  address: IUserAddressModel;
  addresses: IUserAddressModel[];
  created_at?: Date;
  updated_at?: Date;
  recommend_genres: Genre[];
  score: IScoreModel;
  cards: ICardModel[];
}

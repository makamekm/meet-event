import { IUserAddressModel } from './user-address.model';
import { Genre } from '../genre/genre.structure';
import { Level } from '../gamification/level.structure';
import { ICardModel } from '../card/card.model';

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
  level: Level;
  score: number;
  newLevelPercentage: number;
  cards: ICardModel[];
}

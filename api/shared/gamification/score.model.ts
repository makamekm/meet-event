import { Level } from '../gamification/level.structure';
import { IUserModel } from '../auth/user.model';

export interface IScoreModel {
  id?: number;
  user: IUserModel;
  created_at?: Date;
  updated_at?: Date;
  level: Level;
  score: number;
  newLevelPercentage: number;
}

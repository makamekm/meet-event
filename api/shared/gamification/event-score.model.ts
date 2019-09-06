import { IEventModel } from '../event/event.model';

export interface IEventScoreModel {
  id?: number;
  event: IEventModel;
  score: number;
  score_multiplex: number;
}

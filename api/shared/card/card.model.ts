export interface ICardModel {
  id?: number;
  image: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  public: boolean;
}

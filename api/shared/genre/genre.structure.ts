export enum Genre {
  Volleyball = 0,
  Football = 1,
}

export interface IGenreStructure {
  id: number;
  label: string;
  icon?: string;
}

export interface IScopeGenreStructure {
  id: number;
  label: string;
  icon?: string;
  subtypes: IGenreStructure[];
}

export const GenreStructure: IScopeGenreStructure[] = [
  {
    id: 0,
    label: 'Others',
    subtypes: [
      {
        id: Genre.Volleyball,
        label: 'Volleyball'
      },
      {
        id: Genre.Football,
        label: 'Football'
      },
    ]
  },
]
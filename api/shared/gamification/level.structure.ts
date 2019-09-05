export enum Level {
  Newbie = 0,
  Regular = 1,
  Pro = 2,
  Lord = 3,
  King = 4,
}

export interface ILevelStructure {
  id: number;
  label: string;
  icon?: string;
}

export const LevelStructure: ILevelStructure[] = [
  {
    id: Level.Newbie,
    label: 'Newbie',
  },
  {
    id: Level.Regular,
    label: 'Regular',
  },
  {
    id: Level.Pro,
    label: 'Pro',
  },
  {
    id: Level.Lord,
    label: 'Lord',
  },
  {
    id: Level.King,
    label: 'King',
  },
];

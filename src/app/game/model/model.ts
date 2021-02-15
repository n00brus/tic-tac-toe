export type moveType = 'cross' | 'zero' | '';
export interface landType {
  id: number;
  moveType: moveType;
}
export interface PlayerModel {
  firstPlayer: string;
  secondPlayer: string;
}

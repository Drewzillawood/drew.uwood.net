export enum Position { Default, Top, Bottom }

export interface Node {
  type: string;
  position: Position;
}

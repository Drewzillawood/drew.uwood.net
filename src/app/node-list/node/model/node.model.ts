export enum Position { Default, Top, Bottom }

export class NodeModel {
  constructor(
    public type: string,
    public position: Position
  ) {}
}

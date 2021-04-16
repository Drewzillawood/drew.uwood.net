export class Coordinates {
  constructor(
    public x: number,
    public y: number
  ) {}
}

export interface State {
  id: number;
  coordinates: Coordinates;
  head?: State;
  body?: State | State[];
}

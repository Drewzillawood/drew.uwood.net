export class Coordinates {
  constructor(
    public x: number,
    public y: number
  ) {}
}

export interface State {
  id: number;
  head: Coordinates;
  body: Coordinates;
}

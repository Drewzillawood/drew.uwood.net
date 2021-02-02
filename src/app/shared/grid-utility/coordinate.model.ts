export class CoordinateModel {
  public x: number;
  public y: number;

  constructor(rect: DOMRect);
  constructor(x: number, y: number);

  constructor(...args: Array<any>) {
    if (args.length === 0) {
      this.x = 0;
      this.y = 0;
    } else if (args.length === 1) {
      this.createFromRect(args[0]);
    } else {
      this.x = args[0];
      this.y = args[1];
    }
  }

  private createFromRect(rect: DOMRect): void {
    this.x = rect.right - rect.width / 2;
    this.y = rect.bottom - rect.height / 2;
  }
}
